// build your database
const mysql = require('mysql');
const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'store'
});

dbConnection.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to mysql products database');
  }
});

module.exports = dbConnection;