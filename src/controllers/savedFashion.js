const save = require('../database/queries/savedFashion');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const { session } = req.cookies;
  if (session) {
    const verifyCookie = jwt.verify(session, process.env.secret);
    if (verifyCookie) {
      const data = jwt.decode(session);
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
  const { session } = req.cookies;
  if (session) {
    const verifyCookie = jwt.verify(session, process.env.secret);
    if (verifyCookie) {
      const data = jwt.decode(session);
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
