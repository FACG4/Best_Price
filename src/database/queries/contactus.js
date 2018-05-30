const connection = require('../db_connection');

const contactus = (email, name, message, cb) => {
  const sql = {
    text: 'INSERT INTO contactus (email, name, message)VALUES($1,$2,$3) ',
    values: [email, name, message],
  };
  connection.query(sql, (connectionErrorWithDB, result) => {
    if (connectionErrorWithDB) cb(connectionErrorWithDB);
    cb(null, result);
  });
};

module.exports = contactus;
