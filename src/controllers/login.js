const getuserData = require('./../database/queries/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  res.render('login', { style: 'login', layout: 'second' });
};


exports.post = (req, res) => {
  const { username, password } = req.body;

  getuserData(username, (err, data) => {
    if (!data.length) {
      res.send('invalid username');
    } else {
      bcrypt.compare(password, data[0].password, (errr, response) => {
        if (err) throw new Error(errr, 'compare');
        if (response === false) {
          res.send('invalid password');
        } else {
          const key = process.env.secret;
          const token = jwt.sign({ userId: data[0].id, userName: data[0].user_name }, key);
          res.cookie('cookie', token, { maxAge: 1000000, httpOnly: true });
          res.redirect('/');
        }
      });
    }
  });
};
