const connection = require('../db_connection');
const disconutValue = (req,cb) =>{
  const sql = {
    text:"SELECT img FROM items INNER JOIN disconut on items.id=disconut.items_id ",
  }
  connection.query(sql,(dbConnectionError,result)=>{
    if (dbConnectionError) return cb(dbConnectionError)
    cb(null,result.rows)
    console.log(result.rows,'result from Database');

  })
}

module.exports=disconutValue;
