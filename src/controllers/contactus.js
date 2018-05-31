const contactus = require('../database/queries/contactus');

exports.get = (req, res) => {
  let loggedIn;
  res.render('contactus', {
    style: 'contactus',
    loggedIn: req.loggedIn,
    userName: req.userName,
  });
};
exports.post = (req, res) => {
  const { email, name, message } = req.body;
  contactus(email, name, message, (err, result) => {
    if (err) {
      return res.status(409).send();
    }
    return res.render('contactus', {
      style: 'contactus',


    });
  });
};
