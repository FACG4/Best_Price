const { insertUsers, checkUsers } = require('./../database/queries/signup');
const bcrypt = require('bcrypt');

exports.get = (req, res) => {
  res.render('signup', { style: 'signup', layout: 'second' });
};

exports.post = (req, res, next) => {
  const {
    uname, fname, lname, email, password,
  } = req.body;


  checkUsers(email).then((data) => {
    if (data.rows[0]) {
      return res.status(409).send({ error: true, message: 'email already exists' });
    }
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        throw new Error(err, 'hashing password signup');
      } else {
        insertUsers(uname, fname, lname, hash, email, (err, result) => {
          if (err) {
            throw new Error(err);
          } else {
            res.send({ success: true });
          }
        });
      }
    });
  }).catch((err) => {
    console.log(err);
    return res.status(500).send({ error: true, message: 'Server error' });
  });
};
