const save = require('../database/queries/savedFashion');
const jwt = require('jsonwebtoken');

exports.post = (req, res) => {
  const reqbody = req.body;
  const { cookie } = req.cookies;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.key);
    if (verifyCookie) {
      const data = jwt.decode(cookie);
      save.unsaved(
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
