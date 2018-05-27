const dbconnection = require('../db_connection');

const viewDetails = (itemId, cb) => {
  const sql = {
    text: 'SELECT * FROM items WHERE items.id= $1',
    values: [itemId],
  };
  dbconnection.query(sql, (err, details) => {
    if (err) return cb(err);
    return cb(null, details.rows);
  });
};

module.exports = viewDetails;
