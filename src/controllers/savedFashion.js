const save = require('../database/queries/savedFashion');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.get = (req, res) => {

// const passwordHash = bcrypt.hashSync('123', 10);
// console.log(passwordHash);
  const { cookie } = req.cookies;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.key);
    if (verifyCookie) {
      const data = jwt.decode(cookie);
      console.log(data);
      save.savedFashion(data.userId, (dbError, savedFashion) => {
        // console.log(savedFashion,'hi');
        if (dbError) {
          return res.status(500).send({
            error: dbError,
          });
        }

        return res.render('saved', {
          layout: 'main',
          style: 'style',
          title: 'saved fashion',
          savedFashion,
        });
      });
    }
  } else {
    res.render('login', {
      style: 'login',
    });
  }
};

exports.post = (req, res) => {
  const reqbody = req.body;
  // console.log(req.body,'saveddddddd');
  const { cookie } = req.cookies;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.key);
    if (verifyCookie) {
      const data = jwt.decode(cookie);
      save.saved(
        data.userId,
        reqbody.clothId,
        (dbError, result) => {
          if (dbError) {
            return res.status(500).send(dbError);
          }
          return res.send(result);
        },
      );
    }
  } else {
    res.status(401).send();
  }
};
