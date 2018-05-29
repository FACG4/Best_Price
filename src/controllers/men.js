const getMenProductsfromDB = require('./../database/queries/men');

exports.get = (req, res) => {
  getMenProductsfromDB(req, (err, result) => {
    if (err) {
      throw new Error(err, 'error in getting data');
    }
    console.log(result);
    res.render('men', { style: 'women&menStyle', result });
  });
};
