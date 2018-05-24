const viewDetails = require('../Database/queries/viewDetails');
exports.get = (req, res) => {
  const itemId = req.params.id;
  viewDetails(itemId, (err, details) => {
  if (err) return res.status(500).send({ err });
    const bigimg = {
      views1: details[0].views1,
      name: details[0].name,
      shop_name: details[0].shop_name,
      price: details[0].price,
    };
    const itemviews = {
      views1: details[0].views1,
      views2: details[0].views2,
      views3: details[0].views3,
      views4: details[0].views4,

    };

    return res.render('details', {
      style: 'details', layout: 'main', title: 'details', details, bigimg, itemviews,
    });
  });
};
