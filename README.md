# Tasky — MERN Stack To-Do App

A clean, minimalistic full-stack To-Do application built with **MongoDB, Express.js, React, and Node.js**.

---

## 📁 Project Structure

```
ToDo/
├── server/                   # Backend (Node + Express)
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── controllers/
│   │   └── todoController.js # Business logic (CRUD)
│   ├── middleware/
│   │   ├── errorHandler.js   # Global error handler
│   │   └── validate.js       # express-validator middleware
│   ├── models/
│   │   └── Todo.js           # Mongoose schema
│   ├── routes/
│   │   └── todoRoutes.js     # REST API routes
│   ├── .env                  # Environment variables
│   ├── .env.example          # Env template
│   ├── package.json
│   └── server.js             # App entry point
│
└── client/                   # Frontend (React + Vite)
    ├── src/
    │   ├── components/
    │   │   ├── AddTaskForm.jsx   # Task input form
    │   │   ├── EmptyState.jsx    # Empty list message
    │   │   ├── FilterBar.jsx     # All/Pending/Completed tabs
    │   │   ├── SkeletonLoader.jsx# Shimmer loading cards
    │   │   └── TodoCard.jsx      # Single task card
    │   ├── hooks/
    │   │   └── useTodos.js       # Custom hook (all API logic)
    │   ├── services/
    │   │   └── todoService.js    # Axios instance + API calls
    │   ├── App.jsx               # Root component
    │   ├── index.css             # Global styles / design tokens
    │   └── main.jsx              # React entry point
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## ⚙️ Prerequisites

- **Node.js** v18+
- **MongoDB** running locally on port `27017`
  - [Download MongoDB Community](https://www.mongodb.com/try/download/community)
  - Start with: `mongod` or open **MongoDB Compass**

---

## 🚀 Setup & Running

### Step 1 — Backend

```bash
cd server
npm install
npm run dev
# → Express API running at http://localhost:5000
```

### Step 2 — Frontend (new terminal)

```bash
cd client
npm install
npm run dev
# → Vite dev server at http://localhost:5173
```

> Open **http://localhost:5173** in your browser.

---

## 🔧 Environment Variables

`server/.env` (already created):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todo_db
NODE_ENV=development
```

---

## 🔌 REST API Reference

| Method   | Endpoint                  | Description              |
|----------|---------------------------|--------------------------|
| `GET`    | `/api/todos`              | Get all todos            |
| `POST`   | `/api/todos`              | Create a new todo        |
| `PUT`    | `/api/todos/:id`          | Update todo title        |
| `PATCH`  | `/api/todos/:id/toggle`   | Toggle completed status  |
| `DELETE` | `/api/todos/:id`          | Delete a todo            |
| `GET`    | `/api/health`             | Server health check      |

### Example Requests

**Create a task**
```json
POST /api/todos
{ "title": "Buy groceries" }

// 201 Response
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "_id": "664abc123...",
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2026-05-14T06:46:00.000Z",
    "updatedAt": "2026-05-14T06:46:00.000Z"
  }
}
```

**Toggle completion**
```json
PATCH /api/todos/:id/toggle

// 200 Response
{
  "success": true,
  "message": "Task marked as completed",
  "data": { "completed": true, ... }
}
```

---

## 🗄️ MongoDB Schema

```js
const todoSchema = new mongoose.Schema({
  title:     { type: String, required: true, maxlength: 300 },
  completed: { type: Boolean, default: false },
}, { timestamps: true }); // adds createdAt + updatedAt automatically
```

---

## ✨ Features

| Feature                    | ✅ |
|----------------------------|----|
| Add task                   | ✅ |
| Inline edit task           | ✅ |
| Delete task                | ✅ |
| Toggle completed/pending   | ✅ |
| Filter: All / Pending / Done | ✅ |
| Creation date display      | ✅ |
| Empty state messages       | ✅ |
| Shimmer skeleton loader    | ✅ |
| Toast notifications        | ✅ |
| Input validation (FE + BE) | ✅ |
| Global error handler       | ✅ |
| Responsive layout          | ✅ |
| Dark mode UI               | ✅ |

---

## 🧪 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, Vite 5, Axios             |
| Styling    | Vanilla CSS (design token system)   |
| Toasts     | react-hot-toast                     |
| Icons      | react-icons (Feather set)           |
| Backend    | Node.js 18+, Express 4              |
| Validation | express-validator                   |
| Database   | MongoDB 7 + Mongoose 8              |
| Dev tools  | Nodemon                             |
