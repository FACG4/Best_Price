const save = require('../Database/queries/savedFashion');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.get = (req, res) => {

// const passwordHash = bcrypt.hashSync('123', 10);
// console.log(passwordHash);

  const { accessToken } = req.body;
  if (accessToken) {
    const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      const data = jwt.decode(accessToken);
      save.savedFashion(data.id, (dbError, savedfashion) => {
        if (dbError) {
          return res.status(500).send({
            error: dbError,
          });
        }

        return res.render('saved', {
          layout: 'main',
          savedfashion,
          style: 'style',
          title: 'saved fashion',
        });
      });
    }
  } else {
    res.render('login', {
      style: 'style',
    });
  }
};

exports.post = (req, res) => {
  const reqbody = req.body;
  const { accessToken } = req.cookies;
  if (accessToken) {
    const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      const data = jwt.decode(accessToken);
      save.saved(
        data.id,
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
