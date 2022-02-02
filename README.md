# Sweet Tooth Bakery - eCommerce App

> eCommerce platform built with the MERN stack & Redux.

![screenshot](https://github.com/ShaniBel/Sweet-Tooth-bakery-Shop/blob/main/uploads/sweet-tooth-bakery.png)

## Features

backend:

- built using MVC architecture
- Authentication & Authorization of users with email, password and a token
- Full API for frontend requests
- Connection to MongoDB
- Database seeder (products & users)

frontend:

- Shopping cart & Checkout process (shipping, payment method, placing an order)
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search
- User profile with orders
- Admin dashboard with CRUD abilities: product management, user management, Order management
- PayPal / credit card integration

## Usage

### ES Modules in Node

I use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+.

### Env Variables

Create a .env file in the root and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb uri*
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = paypal client id*
CLOUDINARY_NAME = cloudinary name**
CLOUDINARY_API_KEY = cloudinary api key**
CLOUDINARY_API_SECRET = cloudinary api secret**
```

\* Create a MongoDB account and include your uri and use the seeder script to update your database. Create a paypal sandbox account and include your paypal client id.
\*\*Create a cloudinary account and insert your cloudinary name, cloudinary api key, cloudinary api secret to be able to upload images from the admin edit products.

### Install Dependencies (frontend & backend)

```
1. git clone <copy this repo>
2. npm install
3. cd frontend
4. npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

## Build & Deploy

```
# Create frontend production build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku.

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data.

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

## License

The MIT License.
