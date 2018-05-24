const db = require('./../db_connection');

const getMenProductsfromDB = (req, cb)=>{
  const sql = "select * from items where price = '10' and gender = 'male'";
  db.query(sql,(err, result)=>{
  if (err) {
    return cb (err)
  }
  return cb (null, result.rows)
});
}

module.exports = getMenProductsfromDB
