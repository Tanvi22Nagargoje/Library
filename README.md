# Library System

A RESTful API for managing a library system, built with Node.js, Express.js, Sequelize, and PostgreSQL.

## Features

- Manage books (add, update, delete, and fetch books).
- Manage users (add, update, delete, and fetch users).
- Manage borrow records (track borrowing and returning of books).

---

## 1. Instructions to Set Up and Run the Project Locally

### Prerequisites

- **Node.js** installed on your machine.
- **PostgreSQL** installed and running.
- **Git** installed.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Tanvi22Nagargoje/Library_system.git
   cd Library_system
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up the Database**

   - Open PostgreSQL and create the database:
     ```sql
     CREATE DATABASE library_system;
     ```
   - Update the `config/db.js` file with your PostgreSQL credentials:
     ```javascript
     const sequelize = new Sequelize('library_system', 'your_username', 'your_password', {
       host: 'localhost',
       dialect: 'postgres',
     });
     ```

4. **Run Database Migrations**

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the Server**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

---

## 2. Sample Requests and Responses for Each API

### **Book APIs**

#### a. Get All Books

- **Endpoint:** `GET /api/books`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "published_year": 1925,
      "genre": "Fiction",
      "availability": true
    }
  ]
  ```

#### b. Get Book by ID

- **Endpoint:** `GET /api/books/:id`
- **Response:**
  ```json
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genre": "Fiction",
    "availability": true
  }
  ```

#### c. Add a New Book

- **Endpoint:** `POST /api/books`
- **Request Body:**
  ```json
  {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genre": "Dystopian",
    "availability": true
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book added successfully",
    "book": {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "published_year": 1949,
      "genre": "Dystopian",
      "availability": true
    }
  }
  ```

---

### **User APIs**

#### a. Get All Users

- **Endpoint:** `GET /api/users`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "membership_start_date": "2025-01-01"
    }
  ]
  ```

#### b. Add a New User

- **Endpoint:** `POST /api/users`
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "membership_start_date": "2025-01-15"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User added successfully",
    "user": {
      "id": 2,
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "membership_start_date": "2025-01-15"
    }
  }
  ```

---

### **Borrowing APIs**

#### a. Get All Borrow Records

- **Endpoint:** `GET /api/borrowing`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "borrow_date": "2025-01-20",
      "return_date": null,
      "user_id": 1,
      "book_id": 2,
      "user": {
        "name": "John Doe",
        "email": "johndoe@example.com"
      },
      "book": {
        "title": "1984",
        "author": "George Orwell"
      }
    }
  ]
  ```

#### b. Borrow a Book

- **Endpoint:** `POST /api/borrowing`
- **Request Body:**
  ```json
  {
    "user_id": 1,
    "book_id": 2
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book borrowed successfully",
    "borrow_record": {
      "id": 2,
      "borrow_date": "2025-01-25",
      "return_date": null,
      "user_id": 1,
      "book_id": 2
    }
  }
  ```

---

## 3. Assumptions and Limitations

### Assumptions:

1. Each user has a unique email.
2. Only one active borrow record is allowed per user for a single book.
3. The availability of a book is updated automatically when borrowed or returned.

### Limitations:

1. User authentication and authorization are not implemented.
2. No pagination for large datasets in `GET` requests.
3. Advanced error handling is basic and can be extended further.

---

### Contributing

Feel free to fork this repository and make contributions. Pull requests are welcome!

---



