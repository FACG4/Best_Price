const db = require('./../db_connection');

const getuserData = (username, cb) => {
  const sql = {
    text: 'select * from users where user_name = $1 ',
    values: [username],
  };
  db.query(sql, (err, data) => {
    if (err) {
      return cb(err);
    }

    return cb(null, data.rows);
  });
};

module.exports = getuserData;
