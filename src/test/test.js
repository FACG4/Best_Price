const tape = require('tape');
const query = require('../database/queries/query');
const { sql, sqlBuilder } = require('../database/sql_commands')
const supertest = require('supertest');
const contactus = require('../database/queries/contactus');
const dbBuilder= require('../database/db_build');
const {savedFashion,saved} = require('../database/queries/savedFashion');
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
  const email = 'marw1a14@gmail.com';
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
// tape('ramy tester',e=>{
//     dbBuilder();
//
//   savedFashion(3,(err,result)=>{
//     e.equals(result.length,2,'ddddd')
//     e.end()
//   })
// })
tape('view saved items',e=>{
  savedFashion(1,(err,result)=>{
    e.equals(result[0].name,'Shirt','ddddd')
    e.end()
  })
})
tape('user not exist',e=>{
  savedFashion(5000,(err,result)=>{
    e.equals(result.length,0,'ddddd')
    e.end()
  })
})
tape('raise an error',e=>{
  let error=false
  savedFashion('ggfgvgv',(err,result)=>{
    if(err){
        error=true
    }
    e.equals(error,true,'ddddd')
    e.end()
})
})

tape('save proccess',(e)=>{
  dbBuilder();
  saved(3,1,(err, resultSaved)=>{
    savedFashion(3, (err,result)=>{
      console.log(result);
      e.equals(result.length,2,'lkjhgg')
    })

    e.equals(resultSaved.rowCount,1,'ddddd')
    e.end()
  })
})
