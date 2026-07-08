# TeamFlow – Full Stack Team Collaboration & Project Management Platform

## Project Overview

TeamFlow is a modern full-stack project management and collaboration platform designed to help organizations manage projects, tasks, teams, tickets, documents, calendars, notifications, and communication from a single dashboard.

The application provides secure authentication, role-based authorization, real-time team collaboration, analytics dashboards, document management, and ticket tracking. It is built using the MERN stack and follows a modular architecture for scalability and maintainability.

---

# Tech Stack

## Frontend
- React.js
- TypeScript
- Tailwind CSS
- React Router DOM
- React Query
- Axios
- Recharts
- Socket.io Client
- Lucide React Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Socket.io
- Multer
- Dotenv

---

# Features Implemented

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout
- Persistent Login

---

## Role Based Access Control

Three roles are supported:

- Admin
- Manager
- Developer

Each role has access only to authorized modules using ProtectedRoute and RoleRoute.

---

## Dashboard

- KPI Cards
- Project Statistics
- Ticket Statistics
- Activity Overview
- Productivity Charts
- Team Performance
- Recent Activity
- Upcoming Deadlines

---

## Project Management

- Create Projects
- Edit Projects
- Delete Projects
- Project Status
- Due Dates
- Project Dashboard

---

## Task Management

- Create Tasks
- Assign Tasks
- Task Status
- Priority Levels
- Due Dates

---

## Kanban Board

- Drag & Drop Tasks
- Multiple Columns
- Status Updates
- Task Organization

---

## Team Management

- Add Members
- Update Members
- Delete Members
- Search Members
- Department Information
- Role Management

---

## Ticket Management

- Raise Tickets
- Assign Tickets
- Resolve Tickets
- Ticket Status
- Ticket Priority

---

## Document Management

- Upload Documents
- View Documents
- Download Documents
- Delete Documents

---

## Chat System

- Real-time Messaging
- Socket.io Integration
- Multiple Users
- Instant Updates

---

## Analytics

- Dashboard Charts
- Executive Analytics
- Productivity Reports
- Ticket Reports
- Project Reports

---

## Calendar

- Schedule Events
- Project Deadlines
- Task Deadlines

---

## Notifications

- System Notifications
- Activity Alerts

---

# Project Structure

```
TeamFlow
│
├── backend
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── socket
│   ├── utils
│   ├── uploads
│   ├── server.js
│   └── package.json
│
├── teamflow-client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── hooks
│   │   ├── types
│   │   └── utils
│   └── package.json
│
└── README.md
```

---

# Setup Instructions

## Step 1

Clone the repository

```bash
git clone <repository-url>
```

---

## Step 2

Navigate into the project

```bash
cd TeamFlow
```

---

## Step 3

Install Backend Dependencies

```bash
cd backend

npm install
```

---

## Step 4

Install Frontend Dependencies

```bash
cd ../teamflow-client

npm install
```

---

## Step 5

Configure Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/teamflow

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## Step 6

Run Backend

```bash
cd backend

npm run dev
```

---

## Step 7

Run Frontend

```bash
cd teamflow-client

npm run dev
```

---

## Step 8

Open

```
http://localhost:5173
```

---

# Environment Variables

| Variable | Description |
|-----------|-------------|
| PORT | Backend Server Port |
| MONGO_URI | MongoDB Connection String |
| JWT_SECRET | Secret Key for JWT |
| CLIENT_URL | Frontend URL |

---

# API Overview

The backend exposes REST APIs for:

- Authentication
- Users
- Projects
- Tasks
- Team
- Tickets
- Documents
- Analytics
- Dashboard
- Notifications

---

# Database

MongoDB collections include:

- Users
- TeamMembers
- Projects
- Tasks
- Tickets
- Documents
- Messages

---

# Assumptions Made

- MongoDB is running locally or accessible through a valid cloud connection.
- Users have a stable internet connection for API communication.
- Authentication is based on JWT tokens.
- Each authenticated user belongs to a predefined role (Admin, Manager, or Developer).
- Uploaded documents are stored on the server.
- Socket.io is used for real-time chat communication.
- Only authorized users can access protected resources.
- All IDs are MongoDB ObjectIds.

---

# Security

- JWT Authentication
- Password Hashing
- Protected APIs
- Role-Based Authorization
- Input Validation
- Secure REST Endpoints

---

# Features Completed

- User Authentication
- Role Based Access
- Dashboard
- Executive Dashboard
- Project Management
- Task Management
- Team Management
- Ticket Management
- Kanban Board
- Document Upload
- Chat Module
- Calendar
- Notifications
- Analytics
- Executive Analytics
- Responsive UI
- MongoDB Integration
- REST API
- Socket.io Integration

---

# Known Limitations

- Email verification is not implemented.
- Password reset functionality is unavailable.
- Two-factor authentication (2FA) is not supported.
- File versioning is not available.
- Push notifications are not implemented.
- Audit logs are limited.
- Offline mode is not supported.
- Advanced search and filtering are basic.
- Executive analytics currently use limited reporting metrics.
- Unit testing and integration testing have not been fully implemented.

---

# Future Enhancements

- AI-powered task recommendations
- Email notifications
- Push notifications
- Mobile application
- Advanced analytics dashboard
- Gantt chart
- Time tracking
- Video conferencing
- File version control
- Activity timeline
- Dark mode
- Multi-language support
- CI/CD deployment pipeline
- Docker support
- Kubernetes deployment
- Microservices architecture

---

# Author

**TeamFlow**

Full Stack Team Collaboration & Project Management Platform

Developed using the MERN Stack with React, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, React Query, Socket.io, and Recharts.