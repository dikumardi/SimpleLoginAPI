# 🔐 Full Stack Authentication System (MERN)

A scalable and production-ready authentication system built using the MERN stack (MongoDB, Express, React, Node.js).

This project demonstrates secure user authentication using JWT (JSON Web Tokens), HTTP-only cookies, and bcrypt password hashing.

---

## 🚀 Features

* User Registration (Signup)
* User Login (Signin)
* User Logout
* Get Current Logged-in User
* Secure password hashing using bcrypt
* JWT-based authentication
* HTTP-only cookie-based token storage
* Protected routes using middleware
* Clean and modular project structure

---

## 🛠️ Tech Stack

### Frontend
* React.js
* Axios
* React Router DOM
* Context API

### Backend
* Node.js
* Express.js
* MongoDB (Mongoose)
* bcrypt
* jsonwebtoken
* cookie-parser
* dotenv

---

## 📁 Project Structure

```
root/
├── backend/
│ ├── src/
│ │ ├── controllers/ # Business logic
│ │ ├── db/ # Database connection
│ │ ├── middleware/ # Auth middleware
│ │ ├── models/ # Mongoose schemas
│ │ ├── routes/ # API routes
│ │ └── app.js # Express app setup
│ │
│ ├── server.js # Entry point (starts server)
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── features/
│ │ │ └── auth/
│ │ │ ├── hooks/
│ │ │ ├── pages/
│ │ │ ├── services/
│ │ │ └── AuthContext.jsx
│ │ │
│ │ ├── App.jsx
│ │ ├── AppRoutes.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ │
│ ├── public/
│ └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Environment Variables

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

---

## ▶️ Getting Started

```
git clone https://github.com/dikumardi/your-repo-name.git
cd your-repo-name
cd backend && npm install
cd ../frontend && npm install
```

---

## 🔗 API Endpoints

POST   /api/auth/register  
POST   /api/auth/login  
POST   /api/auth/logout  
GET    /api/auth/me  

---

## 👨‍💻 Author
https://github.com/dikumardi
