# SimpleLoginAPI
# Express JWT Authentication API

This project is a simple user authentication system built with **Node.js**, **Express**, and **MongoDB**.
It demonstrates how to implement authentication using **JSON Web Tokens (JWT)** with cookies.

The API allows users to register, log in, access a protected route, and log out.

---

## Features

* User registration
* User login
* JWT based authentication
* Token stored in cookies
* Protected route for authenticated users
* Logout functionality

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* cookie-parser

---

## Installation

Clone the repository:

git clone https://github.com/dikumardi/SimpleLoginAPI.git

Go to the project directory:

cd repo-name

Install dependencies:

npm install

---

## Environment Variables

Create a `.env` file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

## Running the Server

Start the development server:

npm start

Server will run on:

http://localhost:3000

---

## API Routes

### Register User

POST /register

Example request body:

{
"username": "testuser",
"password": "123456"
}

---

### Login User

POST /login

Example request body:

{
"username": "testuser",
"password": "123456"
}

A JWT token will be generated and stored in cookies after successful login.

---

### Get Authenticated User

GET /user

This is a protected route.
The request must include a valid JWT token stored in cookies.

---

### Logout

GET /logout

Clears the authentication cookie and logs the user out.

---

## Purpose

This project was created to practice backend authentication using Node.js and Express.
It demonstrates how to build a basic authentication system with JWT and cookies.

---


