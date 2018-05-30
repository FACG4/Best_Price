const query = require('./queries/query');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

query(sql).then().catch((err) => { throw new Error(err); });
