# Seed Shop Backend Server

Backend server for the Seed Shop application with MongoDB integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the server directory:
```bash
cp .env.example .env
```

3. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=seedshop
PORT=5000
```

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000` by default.

## Seeding the Database

To populate the database with products, run:
```bash
npm run seed
```

This will create the `products` collection with all available seed products.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
  - Body: `{ name, email, password, phone?, address? }`
- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
- `GET /api/auth/users` - Get all users (for admin/testing)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create a new product (admin)

### Orders
- `POST /api/orders` - Create a new order
  - Body: `{ userId?, items, totalAmount, paymentId?, address?, phone? }`
- `GET /api/orders` - Get all orders
- `GET /api/orders/user/:userId` - Get orders by user ID

### Health Check
- `GET /api/health` - Health check endpoint

## MongoDB Collections

The following collections are created automatically:
- **users** - Stores user registration and login information
- **products** - Stores all seed products
- **orders** - Stores order history with payment details

All data is stored in MongoDB and can be viewed in MongoDB Compass.

## MongoDB Connection

The server uses MongoDB for data storage. Make sure you have:
- MongoDB installed locally, OR
- A MongoDB Atlas account and connection string

The connection is established automatically when the server starts.

All signup details, orders, and products will be visible in MongoDB Compass when you connect to your database.

