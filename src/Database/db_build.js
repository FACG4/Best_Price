const connection = require('./db_connection');
const fs = require ('fs');


const sql=fs.readFileSync(`${__dirname}/db_build.sql`).toString();
connection.query(sql,(err,res)=>{
  if(err) throw new Error(err);
  console.log('fsf');
})
