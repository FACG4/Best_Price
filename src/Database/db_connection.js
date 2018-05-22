const {Pool} = require('pg');
const url = require('url');
require('env2')('./config.env');

if (!process.env.DB_URL)
throw new Error(" DB_URL must be set");

const pool = new Pool({
connectionString: process.env.DB_URL,
  ssl: true
});

module.exports = pool;
