const save = require('../database/queries/savedFashion');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const { cookie } = req.cookies;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.key);
    if (verifyCookie) {
      const data = jwt.decode(cookie);
      save.savedFashion(data.userId, (dbError, savedFashion) => {
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
