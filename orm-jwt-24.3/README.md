This project is a base API to be used using JWT.

## Downloading the project

In your terminal, cmd, power shell or bash run the following commands:

- `git clone git@github.com:tryber/nodejs-jwt-base-project.git`
- `cd nodejs-jwt-base-project`
- `npm i`

## Preparing the environment

- Make a copy of the `.env.example` file, creating a `.env` file with your SQL credentials;
- In your terminal, run the command `npm start`;
  - This command will automatically run the `prestart` script, which will initialize the database with `sequelize`.
- The above command will create the `jwt_exercises_dev` database and populate the `Users` and `Posts` tables.

## Project base structure

Below is the base structure of the project. It implements an API in NodeJS and Express that allows creating users, listing posts and logging in. The base project contains a simple authentication. 
 
```
├── README.md
├── api
│ ├── routes.js
│ └── server.js
├── config
│ └── config.js
├── controllers
│ ├── createUser.js
│ ├── getUsers.js
│ ├── login.js
│ └── posts.js
├── migrations
│ ├── users.js
│ └── posts.js
├── models
│ ├── index.js
│ ├── Post.js
│ └── User.js
├── seeders
│ ├── users.js
│ └── posts.js
├── .env.example
├── package-lock.json
└── package.json
```

### Models

Models are responsible for mapping between the entities your application handles and the data layer. Contain all interactions responsible for reading and writing data in your database.

They are organized inside the `models` folder.

### Migrations

Migrations are responsible for creating and/or restoring changes to the database.

They are organized inside the `migrations` folder and there is a migration for each table in the database. In the example, there are `Users` and `Posts` tables.

### Seeders

Seeders are responsible for populating the data in the database tables.

They are organized inside the `seeders` folder. In the example, there are seeders for the `Users` and `Posts` tables.

### Controllers

Controllers are the functions used as callbacks when defining routes.
They are responsible for handling the requests that arrive in the different routes of your application and creating the response that will be sent to the client. Typically, they interact with one or more models to read/write data from the database.

The API has four controllers:

  - `createUser.js`: Handles the creation of new users.

  - `getUsers.js`: Finds the registered users.
  
  - `login.js`: Responsible for the login logic.

  - `posts.js`: Finds a user's posts.
 
### `api/routes.js`

This is a file that contains the project controllers.
 
### `api/server.js`

This is where the API is actually created with Express. This is also where all routes are configured.

### `.env.example` -> `.env`

This file is responsible for storing sensitive server data. This file must be edited with the developer person's MySQL credentials. In this example, the user `root` with no password is being used.
**⚠️ The `.env` file should not be committed overwhelmingly as it stores sensitive data. **
**⚠️ Remember to edit this file with your credentials.**