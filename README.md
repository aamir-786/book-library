# Book Library Application

A full-stack Book Library web application built with React (frontend), Node.js/Express (backend), and MySQL (database).

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)

---

## Features

- User registration and login (with MySQL)
- Add, update, delete, and search books
- Responsive, modern UI with React
- Secure API with JWT authentication (if implemented)
- MySQL database integration

---

## Project Structure

```
book-library/
│
├── book-library-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── book-library-frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## Backend Setup

1. **Install dependencies:**
    ```bash
    cd book-library-backend
    npm install
    ```

2. **Configure MySQL database:**
    - Create a MySQL database (e.g., `book_library`).
    - Create tables:
      ```sql
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );

      CREATE TABLE books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        catalogue VARCHAR(255),
        status VARCHAR(50),
        rating INT
      );
      ```

3. **Configure environment variables:**
    - Create a `.env` file in `book-library-backend`:
      ```
      PORT=5000
      DB_HOST=localhost
      DB_USER=your_mysql_user
      DB_PASSWORD=your_mysql_password
      DB_NAME=book_library
      ```

4. **Set up MySQL connection:**
    - In `models/db.js`:
      ```js
      const mysql = require('mysql2');
      const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      });
      db.connect(err => {
        if (err) {
          console.error('MySQL connection error:', err);
          process.exit(1);
        }
        console.log('Connected to MySQL database.');
      });
      module.exports = db;
      ```

5. **Start the backend server:**
    ```bash
    npm start
    ```
    The backend runs on [http://localhost:5000](http://localhost:5000).

---

## Frontend Setup

1. **Install dependencies:**
    ```bash
    cd book-library-frontend
    npm install
    ```

2. **Configure API base URL (if needed):**
    - In `src/services/api.js`, set the backend URL:
      ```js
      const API_URL = "http://localhost:5000/api";
      ```

3. **Start the frontend:**
    ```bash
    npm run dev
    ```
    The frontend runs on [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user  
  Body: `{ username, email, password }`

- `POST /api/auth/login` — Login  
  Body: `{ email, password }`

### Books

- `GET /api/books` — Get all books
- `GET /api/books/search?q=term` — Search books by title or author
- `POST /api/books` — Add a new book  
  Body: `{ title, author, catalogue, status, rating }`
- `PUT /api/books/:id` — Update a book  
  Body: `{ title, author, catalogue, status, rating }`
- `DELETE /api/books/:id` — Delete a book

---

## Environment Variables

**Backend (`book-library-backend/.env`):**
```
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=book_library
```