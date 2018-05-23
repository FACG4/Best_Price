const connection = require('../db_connection');
const sliderPic = (req,cb) =>{
  const sql = {
    text:"SELECT img FROM items where price='50'",
  }
  connection.query(sql,(dbConnectionError,result)=>{
    if (dbConnectionError) return cb(dbConnectionError)
    cb(null,result.rows)

  })
}

module.exports=sliderPic;
