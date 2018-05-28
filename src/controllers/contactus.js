const contactus = require('../database/queries/contactus');

exports.get = (req, res) => {
  res.render('contactus', { style: 'contactus' });
};
exports.post = (req, res) => {
  const { email, name, message } = req.body;
  console.log(req.body);
  contactus(email, name, message, (err, result) => {
    if (err) {
      return res.status(409).send();
    }
    return res.render('contactus', { style: 'contactus' });
  });
};
