const query = require('./queries/query');
const { sql } = require('./sql_commands')



query(sql.buildCommand).then().catch((err) => { throw new Error(err); });
