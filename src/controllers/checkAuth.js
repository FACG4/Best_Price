const jwt = require('jsonwebtoken');
require('env2')('./config.env');

module.exports = (req, res, next) => {
 const cookies = req.cookies ? (req.cookies ) : {};
 // console.log(req.cookies);
 // console.log(req);
 if (cookies.session) {
   // console.log(cookies.session );
   jwt.verify(cookies.session, process.env.key, (err, decoded) => {
     if (err) {
       res.redirect('/login');
       next();
     } else {
       console.log('asas',decoded);
       req.userName = decoded.userName;
       req.userId = decoded.userId;
       req.loggedIn = true;

     }
   });
 }

   next();


};
