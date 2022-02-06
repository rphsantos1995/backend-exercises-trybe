const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'newUser',
  password: '1234',
  database: 'model_example'});

module.exports = connection;