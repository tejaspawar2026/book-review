# Book Review API

A RESTful API for managing books and user-submitted reviews, built with **Node.js**, **Express**, **MySQL**, and **Sequelize ORM**.

---

## Project structure

.
├── config/
│   └── config.js
├── controllers/
│   └── authController.js
│   └── bookController.js
│   └── reviewController.js
│   └── userController.js
├── middlewares/
│   └── authMiddleware.js
├── migrations/
|   └── 20250520180621-create-books.js
|   └── 20250521022507-create-user.js
|   └── 20250521143631-create-reviews.js
├── models/
|   └── book.js
|   └── index.js
|   └── review.js
|   └── user.js
├── router/
│   └── authRouter.js
│   └── bookRouter.js
│   └── masterRouter.js
│   └── reviewRouter.js
│   └── userRouter.js
├── seeders/
│   └── 20250520181352-demo-books.js
│   └── 20250520190012-demo-users.js
├── services/
│   └── authService.js
│   └── bookService.js
│   └── reviewService.js
│   └── userService.js
├── utils/
│   └── jwt.js
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md


## Project Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js]
- [MySQL]
- [npm]

---

### Clone the Repository

git clone https://github.com/tejaspawar2026/book-review.git
cd book-review

### Install Dependencies

- npm install

### Configure Environment Variables

- Rename the existing .env.example ==> .env it contains the environment variables(Database credentials and Jwt secret key) with dummy data replace it with actual credentials

### Database Setup

# Create the database manually :

- CREATE DATABASE book_review;

# Run Sequelize migrations

- npx sequelize-cli db:migrate

# Run seeders (optional)

- npx sequelize-cli db:seed:all

### Start the Application

- npm start

### In Development Mode

- npm run dev


# API Base URL

- http://localhost:3000/

# API Endpoints

# Users

- POST /signup – Register new user

- POST /login – Authenticate and return a token

# Reviews

- POST /books/:id/reviews – Submit a review (Authenticated, one per user per book)

- PUT /reviews/:id – Update your review (Own review)

- DELETE /reviews/:id – Delete your review (Own review)

# Books

- GET /books – List all books (with pagination, filter by author/genre)

- GET /books/:id – Get book by ID (average rating, pagination)

- POST /books – Add a new book (Authenticated users only)

# Additional feature

- GET /search – Get books by title and author (case-insensitive)

### Example API Requests

# Using Postman

# 1 Add Book 
- Method: POST
- URL: http://localhost:3000/api/v1/books
- Headers:
  - Content-Type: application/json
  - Authorization: Bearer <your_token>
- Body (raw JSON):
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-Help"
  }
# 2  Get All Books with Filters

- Method: GET
- URL: http://localhost:3000/api/v1/books?page=1&limit=5&author=James Clear&genre=Self-Help

# 3 Search Books by Title or Author

- Method: GET
- URL: http://localhost:3005/api/v1/books/search?page=1&limit=10&searchTerm=To Kill a Mockingbird


### Design Decisions and Assumptions

## Authentication

- JWT (JSON Web Tokens) is used for authentication.

- All endpoints that modify data (create/update/delete books or reviews) require a valid JWT.

- The token is expected to be sent in the Authorization header as a Bearer token.

## User Reviews

- A user can submit only one review per book.

- Users are allowed to update or delete only their own reviews.

- Each review is associated with both a userId and bookId.

## Book Management

- Only authenticated users can add books.

- The system supports fetching books with:

- Pagination (page and limit)

- Filters (author, genre)

- Search by title or author (case-insensitive and partial matches).

## Database

- MySQL is used as the primary relational database.

- Sequelize ORM is used for database modeling and querying.

## API Structure

- The project uses a controller-service structure to separate business logic from request handling.

- Routes are modularized and grouped into:

- /auth for authentication-related operations

- /user for user-related operations

- /books for book operations

- /reviews for managing book reviews

## Error Handling

- Meaningful error messages are returned for:

- Missing tokens

- Invalid credentials

- Unauthorized actions

- Validation errors

- Standard HTTP status codes are used to indicate the result of API operations.

## Search Functionality

- Search is implemented through query parameters for partial title or author matches.

- Filtering and searching can be combined with pagination.

## Environment Setup

- Environment variables (e.g., JWT_SECRET, DB_HOST, DB_NAME) are managed using the dotenv package.

- Sequelize migrations and models are used to structure and sync the database schema.

### Postman collection is in project root directory 
### Database is in project root directory
