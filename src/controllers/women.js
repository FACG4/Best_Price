const getItems = require('./../database/queries/women');

exports.get = (req, res) => {
  getItems(req, (err, result) => {
    if (err) {
      return res.status(404).send(err, 'sorry error in getting data');
    }

    res.render(
      'women',
      {
        title: 'women Fashion',
        style: 'women&menStyle',
        result,
        loggedIn: req.loggedIn,
        userName: req.userName,
      },
    );
  });
};
