✅ Task Manager Using MERN Stack

A full-stack Task Management Application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to sign up, log in, create, update, view, and delete tasks securely with authentication and authorization.

📌 Author

👩‍💻 Name: Kavya Pandian
📧 Email: kavyapandian15@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/kavyapandian

📚 Table of Contents

Features

Tech Stack

Dependencies

Prerequisites

Installation & Setup

API Endpoints

Frontend Routes

Scripts

Screenshots

Contact

⭐ Features
✅ User Features

User Signup / Login / Logout

Create new tasks

View all personal tasks

Update existing tasks

Delete tasks permanently

⚙ Developer-Friendly Features

JWT-based authentication

Redux for global state management

Toast notifications for success/error

Tailwind CSS — no external CSS files

Responsive and modern UI

Protected routes (frontend + backend)

Custom hooks & reusable components

Environment variables (.env) support

🛠 Tech Stack
Technology	Purpose
MongoDB	Database
Express.js	Backend Framework
React	Frontend Library
Node.js	Server Runtime
Tailwind CSS	Styling
Redux	State Management
📦 Dependencies
Frontend:
- react, react-dom, react-router-dom
- redux, react-redux, redux-thunk
- axios, react-toastify

Backend:
- express, mongoose, dotenv
- bcryptjs, jsonwebtoken, cors

✅ Prerequisites

✔ Node.js installed
✔ MongoDB database (local or cloud)
✔ VS Code or any code editor

⚙ Installation & Setup
# 1. Clone the repository
git clone <your-repo-link>

# 2. Navigate to project folder
cd MERN-task-manager

# 3. Install all dependencies
npm run install-all

# 4. Create a .env file inside backend and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

# 5. Start development servers (frontend + backend)
npm run dev


➡ Open your browser and go to http://localhost:3000

🛤 API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Register user
POST	/api/auth/login	User login
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
GET	/api/tasks/:id	Get single task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🌐 Frontend Routes
Route	Description
/	Home / Dashboard
/signup	User Registration
/login	User Login
/tasks/add	Add new task
/tasks/:taskId	Edit specific task




📬 Contact

💡 Developed by: Kavya Pandian
📧 Email: kavyapandian15@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/kavyapandian
