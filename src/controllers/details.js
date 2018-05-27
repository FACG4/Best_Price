const viewDetails = require('../Database/queries/viewDetails');
exports.get = (req, res) => {
  const itemId = req.params.id;
  viewDetails(itemId, (err, details) => {
  if (err) return res.status(500).send({ err });

    return res.render('details', {
      style: 'details', layout: 'main', title: 'details', details,
    });
  });
};
