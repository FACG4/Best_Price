const viewDetails = require('../database/queries/viewDetails');
const { checkedSingleItems } = require('../database/queries/savedFashion');

exports.get = (req, res) => {
  const itemId = req.params.id;

  viewDetails(itemId, (err, details) => {
    if (err) return res.status(500).send({ err });

    checkedSingleItems(req.userId, itemId, (err, result) => {
      if (err) {
        details[0].saved = false;
      } else if (result.rowCount) {
        details[0].saved = true;
      }

      return res.render('details', {
        style: 'details',
        layout: 'main',
        title: 'details',
        details,
        loggedIn: req.loggedIn,
        userName: req.userName,
        id: req.userId,
      });
    });
  });
};
