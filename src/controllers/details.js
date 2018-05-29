const viewDetails = require('../database/queries/viewDetails');
exports.get = (req, res) => {
  const itemId = req.params.id;
  viewDetails(itemId, (err, details) => {
  if (err) return res.status(500).send({ err });

    return res.render('details', {
      style: 'details',
       layout: 'main',
        title: 'details',
        details,
        loggedIn:req.loggedIn,
         userName:req.userName,

    });
  });
};
