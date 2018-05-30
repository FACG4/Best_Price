const disconutValue = require('../database/queries/discount');

let loggedIn;
exports.disconutValue = (req, res) => {
  disconutValue(req, (err, result) => {
    if (err) {
      return res.status(404).send(err, 'error in Database');
    }
    return res.render('home', {
      style: 'homeStyle',
      layout: 'main',
      title: 'homePage',
      result,
      loggedIn: req.loggedIn,
      userName: req.userName,
    });
  });
};
