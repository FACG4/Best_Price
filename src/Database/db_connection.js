const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl = process.env.DB_URL;

// if (process.env.NODE_ENV === 'test') dbUrl = process.env.TEST_DB_URL;
// if (!dbUrl) throw new Error('DB_URL must be set');

module.exports = new Pool({
  connectionString: process.env.DB_URL,
  ssl: true,
});
