const getuserData = require('../database/queries/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  if (req.loggedIn) {
    return res.redirect('/');
  }
  res.render('login', { style: 'login', layout: 'second' });
};

exports.post = (req, res) => {
  const { username, password } = req.body;

  getuserData(username, (err, data) => {
    if (data.length === 0) {
      res.send({ error: true, message: 'Wrong username or password' });
    } else {
      bcrypt.compare(password, data[0].password, (err, response) => {
        if (err) throw new Error(err, 'compare');
        if (response === false) {
          res.send({ error: true, message: 'Wrong username or password11' });
        } else {
          const secret = process.env.secret;
          const token = jwt.sign({ userId: data[0].id, userName: data[0].user_name }, secret);

          res.cookie('session', token, { maxAge: 1000000, httpOnly: true });
          req.user = data[0].user_name;

          res.send({ msg: 'success', user: req.user });
        }
      });
    }
  });
};
