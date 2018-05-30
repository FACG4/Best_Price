const connection = require('../db_connection');

const query = sql => new Promise((resolve, reject) => {
  connection.query(sql, (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});

module.exports = query;
