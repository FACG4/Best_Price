const getuserData = require('./../database/queries/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const swal = require('sweetalert');
exports.get = (req, res) => {
  if(req.loggedIn){
    return res.redirect('/')
  }else{
    res.render('login', { style: 'login', layout: 'second' });

  }
};


exports.post = (req, res) => {
  const {username, password } = req.body;
  console.log(req.body);
  getuserData(username, (err, data) => {
    if (data.length===0) {
      res.send({ error: true, message: 'Wrong username or password' });
    } else {
      // console.log(password);
      // console.log( data[0].password);
      bcrypt.compare(password, data[0].password, (err, response) => {
        if (err) throw new Error(err, 'compare');
        if (response === false) {
          res.send({ error: true, message: 'Wrong username or password11' });
        } else {
          const secret = process.env.key;
          const token = jwt.sign({ userId: data[0].id, userName: data[0].user_name }, secret);
          console.log(token);
          res.cookie('session', token, { maxAge: 1000000, httpOnly: true });
          req.user = data[0].user_name
          // console.log(res);
          // console.log('username' ,req.user);
          res.send({msg:'success', user:req.user})

        }
      });
    }
  });
};
