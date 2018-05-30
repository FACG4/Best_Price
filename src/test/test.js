const tape = require('tape');
const supertest = require('supertest');
const contactus = require('../database/queries/contactus');
const disconutValue = require('../database/queries/discount');
// const { insertUsers, checkUsers } = require('../database/queries/signup');
const signup = require('../controllers/signup');

const app = require('../app');

tape('Select the rows that have disconut', (t) => {
  disconutValue(12345, (err, result) => {
    t.equal(err, null, 'dbConnectionError');
    t.equal(result.length > 0, true, ' Data is got successfully');
    t.end();
  });
});

tape('test contactus query', (t) => {
  const email = 'marwa14@gmail.com';
  const name = 'Hello';
  const message = 'love your website';

  contactus(email, name, message, (err, res) => {
    if (err) {
      t.fail();
      t.end();
    }
    t.equal(res.rowCount, 1, 'The result should be true when insert the information to database');

    t.end();
  });
});


tape('Getting signup', (t) => {
  supertest(app)
    .get('/signup')
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err);
        t.end();
      }
      t.equal(res.type, 'text/html', 'should return html');
      t.equal(res.statusCode, 200, 'should return statusCode 200');

      t.end();
    });
});
