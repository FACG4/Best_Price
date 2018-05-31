const connection = require('../db_connection');

const disconutValue = (req, cb) => {
  const sql = {
    text: 'SELECT items.img,items.id FROM items where price < 50  ',
  };
  connection.query(sql, (dbConnectionError, result) => {
    if (dbConnectionError) return cb(dbConnectionError);
    cb(null, result.rows);
  });
};

module.exports = disconutValue;
