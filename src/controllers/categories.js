const query = require('../database/queries/query');
const { categoryCommands } = require('../database/sql_commands');

exports.get = (req, res) => {
  query(categoryCommands.selectNoFilter).then((result) => {
    if (result.rowCount === 0) {
      res.status(200).render('categories', {
        style: 'categories',
        result: 'There are no items that fit your search.',
      });
    } else {
      res.status(200).render('categories', {
        style: 'categories',
        result: result.rows,
      });
    }
  }).catch(err => res.status(500).send({ errorBody: err, errorMessage: 'internal server error' }));
};

exports.hell = (req, res) => {
  res.render('categories')
  // if (req.params.id.split('&').length === 3) {
  //   console.log(req.params.id);
  //   res.render('categories');
  // }
  // if (req.params.id.split('&').length === 2) {
  //   console.log(req.params.id);
  //   res.render('categories');
  // }
  // if (req.params.id.split('&').length === 1) {
  //   console.log(req.params.id);
  //   res.render('categories');
  // }
};
