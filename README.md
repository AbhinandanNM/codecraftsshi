# CodeCrafts MVP

A gamified programming learning platform similar to Duolingo, focused on teaching Python and C++ through interactive lessons, code challenges, and competitive features.

## Quick Start

1. Clone the repository
2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
3. Start the application:
   ```bash
   docker-compose up --build
   ```

## Services

- **Frontend**: http://localhost:3000 (React + TailwindCSS)
- **Backend API**: http://localhost:8000 (FastAPI)
- **Database**: PostgreSQL on port 5432

## Project Structure

```
codecrafts-mvp/
├── backend/                 # FastAPI backend
│   ├── main.py             # Application entry point
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend container config
├── frontend/               # React frontend
│   ├── src/                # Source code
│   ├── public/             # Static assets
│   ├── package.json        # Node.js dependencies
│   └── Dockerfile          # Frontend container config
├── database/               # Database configuration
│   └── init.sql           # Database initialization
├── docker-compose.yml      # Service orchestration
├── .env.example           # Environment variables template
└── README.md              # This file
```

## Development

The application uses Docker Compose for local development with hot reloading enabled for both frontend and backend services.

### Prerequisites

- Docker and Docker Compose
- Git

### Environment Variables

Copy `.env.example` to `.env` and update the values as needed:

- `DATABASE_URL`: PostgreSQL connection string
- `SECRET_KEY`: JWT secret key (change in production)
- `JUDGE0_API_KEY`: API key for code execution service
- `REACT_APP_API_URL`: Backend API URL for frontend

## Features

- User authentication with JWT tokens
- Interactive programming lessons
- Multiple question types (MCQ, fill-in-blank, flashcards, code challenges)
- Code execution environment
- Spaced repetition system
- Gamification (XP, streaks, leaderboards)
- Competitive duels
- Responsive design with TailwindCSS

## Technology Stack

- **Frontend**: React 18, TypeScript, TailwindCSS, Monaco Editor
- **Backend**: FastAPI, SQLAlchemy, PostgreSQL, JWT
- **Infrastructure**: Docker, Docker Compose
- **Code Execution**: Judge0 API integration