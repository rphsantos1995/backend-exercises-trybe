// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'newUser',
  password: '1234',
  database: 'model_example',
  port: 3308
});

module.exports = connection;