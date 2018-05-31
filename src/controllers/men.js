const getMenProductsfromDB = require('./../database/queries/men');

exports.get = (req, res) => {
  getMenProductsfromDB(req, (err, result) => {
    if (err) {
      throw new Error(err, 'error in getting data');
    }
    res.render(
      'men',
      {
        style: 'women&menStyle',
        result,
        loggedIn: req.loggedIn,
        userName: req.userName,
      },
    );
  });
};
