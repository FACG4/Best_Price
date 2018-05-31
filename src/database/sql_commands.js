const fs = require('fs');
const path = require('path');

const sql = {
  menTop: `SELECT * FROM items WHERE gender = 'male' AND class = 'top'`,
  menLegs: `SELECT * FROM items WHERE gender = 'male' AND class = 'leg'`,
  menShoes: `SELECT * FROM items WHERE gender = 'male' AND class = 'shoes'`,
  menacc: `SELECT * FROM items WHERE gender = 'male' AND class = 'accessories'`,
  womenTop: `SELECT * FROM items WHERE gender = 'female' AND class = 'top'`,
  womenLegs: `SELECT * FROM items WHERE gender = 'female' AND class = 'legs'`,
  womenShoes: `SELECT * FROM items WHERE gender = 'female' AND class = 'shoes'`,
  womenacc: `SELECT * FROM items WHERE gender = 'female' AND class = 'accessories'`,
  buildCommand: fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString(),
};




module.exports = { sql };
