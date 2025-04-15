# Task Manager Application

A full-stack task management application built with React, Node.js, Express, and MySQL (TiDB Cloud).

## Features

- Create, read, update, and mark tasks as completed
- Task prioritization (low, medium, high)
- Due date tracking
- Responsive and modern UI
- Real-time task management
- Secure database storage

## Tech Stack

### Frontend
- React.js
- Material-UI (MUI)
- React Router
- Axios for API calls
- React Context for state management

### Backend
- Node.js
- Express.js
- MySQL (TiDB Cloud)
- Sequelize ORM
- CORS for cross-origin requests

## Project Structure

```
task-manager/
├── frontend/               # React frontend application
│   ├── public/            # Static files
│   └── src/               # Source files
│       ├── components/    # React components
│       ├── context/       # Context providers
│       ├── services/      # API services
│       └── App.js         # Main application component
│
└── backend/               # Node.js backend application
    ├── config/           # Configuration files
    ├── models/           # Database models
    ├── routes/           # API routes
    └── server.js         # Server entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TiDB Cloud account (for database)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-manager
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create a `.env` file in the backend directory with your TiDB Cloud credentials:
```
PORT=5000
DB_HOST=your-tidb-host
DB_PORT=4000
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=task_manager
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Mark a task as completed

## Task Model

```javascript
{
    id: Integer,
    title: String,
    description: Text,
    completed: Boolean,
    dueDate: Date,
    priority: Enum('low', 'medium', 'high'),
    createdAt: DateTime,
    updatedAt: DateTime
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- TiDB Cloud for the database hosting
- React and Node.js communities for their excellent documentation
