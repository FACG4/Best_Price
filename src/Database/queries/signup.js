const db_connection = require('./../db_connection');

const insertUsers = (uname,fname,lname,email,password,cb) => {
  const sql = {
        text: "INSERT INTO users (user_name,first_name,last_name,password,email) VALUES ($1,$2,$3,$4,$5)",
        values: [uname,fname,lname,email,password]}

  db_connection.query(sql,(err,data) => {
    if (err){
       cb(err);
    }else{
      cb(null,data)
    }
  });
}

const checkUsers = (email) => {
  const sql = 'SELECT *from users where email =$1';
  return db_connection.query(sql, [email]);
};


module.exports = {
  insertUsers,
  checkUsers
};

