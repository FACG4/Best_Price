const jwt = require('jsonwebtoken');
require('env2')('./config.env');

module.exports = (req, res, next) => {
  const cookies = req.cookies ? (req.cookies) : {};
  if (cookies.cookie) {
    jwt.verify(cookies.cookie, process.env.key, (err, decoded) => {
      if (err) {
        res.render('/login');
        next();
      } else {
        req.userName = decoded.userName;
        req.userId = decoded.userId;
        req.loggedIn = true;
      }
    });
  }
  next();
};
