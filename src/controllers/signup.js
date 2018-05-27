const {insertUsers,checkUsers} = require('./../Database/queries/signup');
const bcrypt = require('bcrypt');

let isLetters = (value) => {
  return RegExp('^[a-zA-Z ]*$').test(value)
};
let isPasswordStrong = (value) => {
  return value.length === 0 || RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(value)
};
let validateEmail= (value)=> {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}
exports.get = (req, res) => {
  res.render('signup', { activePage: { register: true } });
};

exports.post = (req, res, next) => {
  const { uname,fname,lname,email,password } = req.body
  // console.log(req.body);


  if (!uname && !fname && !lname && !email && !password) {
    return res.status(400).send({ error: true, message: 'Missing details' })
  }

  if(!isLetters(uname) && !isLetters(fname) &&!isLetters(fname) && !validateEmail(email) && !isPasswordStrong(password)){
    return res.status(400).send({ error: true, message: 'Invalid data entered' })
  }

  checkUsers(email).then(data => {

    if (data.rows[0]) {
      return res.status(409).send({ error: true, message: 'email already exists' })
    } else {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              throw new Error(err, 'hashing password signup');
            } else {
              insertUsers(uname,fname,lname,hash,email, (err, result) => {
                if (err){
                  throw new Error(err)
                } else{
                 res.send({ success: true });
              }
            });
          }
      });
    }
  }).catch(err => {
    console.log(err)
    return res.status(500).send({ error: true, message: 'Server error' })
  })

};

