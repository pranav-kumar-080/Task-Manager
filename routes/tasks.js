const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json(tasks);
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).json({ message: err.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
            completed: req.body.completed || false
        });
        res.status(201).json(task);
    } catch (err) {
        console.error('Error creating task:', err);
        res.status(400).json({ message: err.message });
    }
});

// Update a task
router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.update({
            title: req.body.title || task.title,
            description: req.body.description || task.description,
            completed: req.body.completed !== undefined ? req.body.completed : task.completed,
            dueDate: req.body.dueDate || task.dueDate,
            priority: req.body.priority || task.priority
        });

        res.json(task);
    } catch (err) {
        console.error('Error updating task:', err);
        res.status(400).json({ message: err.message });
    }
});

// Mark task as completed (instead of deleting)
router.delete('/:id', async (req, res) => {
    try {
        console.log('Marking task as completed with ID:', req.params.id);
        
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            console.log('Task not found with ID:', req.params.id);
            return res.status(404).json({ message: 'Task not found' });
        }

        console.log('Found task to mark as completed:', task.toJSON());
        await task.update({ completed: true });
        console.log('Task marked as completed successfully');
        
        res.json({ 
            message: 'Task marked as completed',
            task: task.toJSON()
        });
    } catch (err) {
        console.error('Error marking task as completed:', err);
        res.status(500).json({ 
            message: 'Error marking task as completed',
            error: err.message 
        });
    }
});

module.exports = router; 