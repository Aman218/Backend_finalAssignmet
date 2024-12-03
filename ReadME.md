# ShoppyGlobe Backend API

## Project Overview
This project implements the backend for **ShoppyGlobe**, an e-commerce platform, using **Node.js**, **Express.js**, and **MongoDB**. The backend includes product management, shopping cart operations, and user authentication features.

---

## Installation and Setup

### 1. Clone the Repository

git clone <repository-url>
cd Backend_FinalAssignment

### 2. Install Dependencies
 
 npm install

 ### 3.  Run MongoDB

 ### 4. Start the server

 node server.js

 ## Features and Routes
  ### Products API

GET /products: Fetch all products.
GET /products/:id: Fetch product details by ID.
POST /cart: Add a product to the cart.
PUT /cart/:id: Update cart item quantity.
DELETE /cart/:id: Remove a product from the cart.
### User Authentication
POST /register: Register a new user.
POST /login: Authenticate a user and receive a JWT token.
### Protected Routes
Cart-related routes are accessible only to logged-in users with a valid JWT token.