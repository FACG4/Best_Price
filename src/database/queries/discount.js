const connection = require('../db_connection');

const disconutValue = (req, cb) => {
  const sql = {
    text: 'SELECT items.img,items.id FROM items INNER JOIN disconut on items.id=disconut.items_id ',
  };
  connection.query(sql, (dbConnectionError, result) => {
    if (dbConnectionError) return cb(dbConnectionError);
    cb(null, result.rows);
  });
};

module.exports = disconutValue;
