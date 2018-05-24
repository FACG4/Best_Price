const dbconnection = require('../db_connection');

const viewDetails = (itemId, cb) => {
  const sql = {
    text: 'SELECT price, img as detailimg,views1,views2,views3,views4 as itemviews,name,shop_name,size,price,location FROM items WHERE items.id= $1',
    values: [itemId],
  };
  dbconnection.query(sql, (err, details) => {
    if (err) return cb(err);
    return cb(null, details.rows);
  });
};

module.exports = viewDetails;
