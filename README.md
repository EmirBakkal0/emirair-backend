# EmirAir Backend

This is the backend for the EmirAir flight booking application. It provides APIs for managing flights, cities, tickets, and user authentication. 

frontend repo link: https://github.com/EmirBakkal0/EmirAir-Frontend

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You also need to have MongoDB installed and running.

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/EmirBakkal0/emirair-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Configuration

Create a `.env` file in the root of the project and add the following environment variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/emirair
JWT_SECRET=your_jwt_secret
```

**Note:**

- You can choose any port you want.
- `MONGO_URI` is the connection string for your local MongoDB instance. `emirair` is the name of the database that will be created.
- `JWT_SECRET` is used for signing and verifying JSON Web Tokens. You should use a long, random string for this.

## Usage

To run the application, you can use one of the following scripts:

To start the server:

```sh
npm start
```

To start the server in development mode with nodemon (restarts the server on file changes):

```sh
npm run dev
```

The server will be running on the port you specified in the `.env` file (e.g., `http://localhost:5000`).

## Scripts

- `npm start`: Starts the server using `node server.js`.
- `npm run dev`: Starts the server using `nodemon server.js` for development

## Seeding the Database

To seed the database with initial city data, you can run the `seedCities.js` script. Make sure your server is running before executing this script.

```sh
node scripts/seedCities.js
```

## Creatinng admin account

To create admin accounnt run the 'createAdminAcc.js' script. Make sure the server is running.
```sh
node scripts/createAdminAcc.js
```