const connection = require('./db_connection');

connection.query('SELECT 1;', (err, res) => {
  console.log(err, res);
});
