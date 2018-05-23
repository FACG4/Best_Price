const query = require('../database/queries/query');
const { select } = require('../database/sql_commands');

exports.get = (req, res) => {
  query(select).then((result) => {
    res.status(200).render('categories.hbs', {
      style: 'categories.css',
      result: result.rows,
    });
  }).catch(err => res.status(500).send({ errorBody: err, errorMessage: 'internal server error' }));
};
