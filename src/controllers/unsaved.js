const save = require('../database/queries/savedFashion');
const jwt = require('jsonwebtoken');

exports.post = (req, res) => {
  const reqbody = req.body;
  const { session } = req.cookies;
  if (session) {
    const verifyCookie = jwt.verify(session, process.env.secret);
    if (verifyCookie) {
      const data = jwt.decode(session);
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
