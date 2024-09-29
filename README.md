# Threadly Cart Backend

A backend API built using **NestJS** and **GraphQL** for managing the shopping cart in the Threadly platform. This service handles adding items in the user's cart and favorite list, and querying the cart data.

## Description

**Threadly Cart Backend** provides an efficient way to manage users' shopping carts on the Threadly platform. It supports GraphQL queries and mutations for adding items to the cart, retrieving the cart data, adding item to the favorite list, and removing them. The backend is built on top of **NestJS**, which offers a modular architecture for easy scalability and maintainability.

## Technology Stack

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **GraphQL**: A query language for APIs, enabling clients to request specific data and receive exactly what they need.
- **TypeORM/Mongoose**: For managing MongoDB as the main database.
- **MongoDB**: A NoSQL database system to store cart and product data.
- **Apollo Server**: A fully-featured GraphQL server to handle GraphQL queries and mutations.

## Features

- **Add to Cart**: Users can add products to their shopping cart with specified quantities.
- **View Cart**: Retrieve all items currently in the user's cart.
- **Add to Favorite**: Users can add products to their list of favorites.
- **View list of Favorites**: Retrieve all items currently in the user's list of favorites.

## GraphQL Schema

The project uses a modular GraphQL schema structure. Below are some key types, queries, and mutations available in this project.

### Example GraphQL Queries

1. **Query for fetching all products:**

    ```graphql
    query Cart_items {
      cart_items {
        _id
        userID
        prod_size_id
        quantity
      }
    }
    ```

2. **Query for fetching a product by product ID:**

    ```graphql
    query Favorite($prodColorId: String!) {
      favorite(prod_color_id: $prodColorId) {
        _id
        check
      }
    }
    ```

### Example GraphQL Mutations

1. **Create a new product:**

    ```graphql
    mutation AddCart($prodSizeId: String!) {
      addCart(prod_size_id: $prodSizeId) {
        _id
        userID
        prod_size_id
        quantity
      }
    }
    ```

## API Endpoints

This project exposes a single GraphQL endpoint:

- `http://localhost:3005/graphql`

## Installation

Follow these steps to install and run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/yllkakrasniqi/threadly_cart_backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd threadly_cart_backend
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables by creating a `.env` file in the root of the project:
    ```bash
      PORT=3005
      CORS_ORIGIN=http://localhost:3000 or your deployed server
      DB_HOST='mongodb_host'
      DB_PORT=mongodb_port
      DB_NAME='database_name'
      JWT_SECRET=your_jwt_secret
    ```

5. Running the app:
    ```bash
    # development
    $ npm run start

    # watch mode
    $ npm run start:dev

    # production mode
    $ npm run start:prod
    ```

## Usage

You can interact with the API using GraphQL clients such as [Apollo Studio Explorer](https://studio.apollographql.com/), [GraphiQL](https://github.com/graphql/graphiql), or any other API clients like [Postman](https://www.postman.com/).