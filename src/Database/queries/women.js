const db = require('./../db_connection');

const getItems = (req, cb)=>{
  const sql = "select * from items where price ='10' and gender = 'female'";
  db.query(sql ,(err,result)=>{
    if(err){
    return  cb(err)
    }
    console.log(result.rows);
    return cb(null, result.rows)
  })
}



module.exports = getItems
