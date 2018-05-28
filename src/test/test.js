const tape = require('tape');
const query = require('../database/queries/query');
const { sql, sqlBuilder } = require('../database/sql_commands')
const supertest = require('supertest');
const app = require('../app');

tape('testing the query builder string security against sql injections', (t) => {
  const expected = 'select * FROM items WHERE size = \'small\';';
  const actual = sqlBuilder('select', 's1', 'items', '*');
  t.equal(actual, expected, 'resulting sql command for req.params = s1 should be select * FROM items WHERE size = \'small\';');
  t.end();
})

tape('testing the query builder for multiple categories as well as its security against sql injections', (t) => {
  const expected = 'select * FROM items WHERE ((price > 50 AND price <= 100)) AND (size = \'small\' OR size = \'medium\') AND (location = \'North\');';
  const actual = sqlBuilder('select', 's1,s2&p2&l1', 'items', '*');
  t.equal(actual, expected, 'resulting sql command for req.params = s1,s2&p2&l1 should be select * FROM items WHERE ((price > 50 AND price <= 100)) AND (size = \'small\' OR size = \'medium\') AND (location = \'North\');');
  t.end();
})
tape('testing the query using the sqlbuilder for multiple categories', (t) => {
  query(sqlBuilder('select', 's1,s2&p2', 'items', '*')).then((res) => {
    t.equal(res.rows[0].size, 'medium', 'size of the item should be medium');
    t.equal(res.rows[0].price, 70, 'price of the item should be between 50 and 100');
    t.end();
  })
    .catch(err => console.log(err));
})

tape('testing the build command', (t) => {
  const expected = 'CREATE'
  query(sql.buildCommand).then((res) => {
    t.equal(res[2].command, expected, 'command must be CREATE');
    t.end();
  }).catch(err => t.end(err));
});

tape('testing the select command', (t) => {
  const expected = 'SELECT';
  query(sql.selectNoFilter).then((res) => {
    t.equal(res.command, expected, 'command must be SELECT');
    t.end();
  }).catch(err => t.end(err));
});

tape('testing the type of res.rows from the select query', (t) => {
  const expected = true;
  query(sql.selectNoFilter).then((res) => {
    t.equal(Array.isArray(res.rows), expected, 'res.rows should be an array of objects');
    t.end();
  }).catch(err => t.end(err));
});

tape('testing the type of res.rows[0]', (t) => {
  const expected = 'object';
  query(sql.selectNoFilter).then((res) => {
    t.equal(typeof res.rows[0], expected, 'res.rows[0] should be an object');
    t.end();
  }).catch(err => t.end(err));
});

tape('testing the build command', (t) => {
  const expected = 'small';
  query(sql.selectNoFilter).then((res) => {
    t.equal(res.rows[0].size, expected, 'res.rows[0].size should be small');
    t.end();
  }).catch(err => t.end(err));
});

tape('testing the query builder for all prices', (t) => {
  const expected = 7;
  query(sqlBuilder('select', 'p1,p2,p3', 'items', '*')).then((res) => {
    t.equal(res.rowCount, expected, 'selecting all price ranges must return all rows (7 in total)');
    t.end();
  }).catch(err => console.log(err));
});

tape('testing the query builder for size 1', (t) => {
  const expected = 1;
  query(sqlBuilder('select', 's1', 'items', '*')).then((res) => {
    t.equal(res.rowCount, expected, 'selecting size 1 must return one rows');
    t.end()
  }).catch(err => console.log(err));
});

tape('testing the query builder for size 1', (t) => {
  const expected = 'small';
  query(sqlBuilder('select', 's1', 'items', '*')).then((res) => {
    t.equal(res.rows[0].size, expected, 'selecting size 1 must return rows where row[i].size = small)');
    t.end()
  }).catch(err => console.log(err));
});

tape('Home route', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.equal(Object.values(res.headers)[1], 'text/html; charset=utf-8', 'response headers should return html as content type');
      t.error(err)
      t.end();
    });
});
