const query = require('../database/queries/query');
const { sql, sqlBuilder } = require('../database/sql_commands');

exports.get = (req, res) => {
  query(sql.selectNoFilter).then((result) => {
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
  query(sqlBuilder('select', req.params.id, 'items', '*')).then((result) => {
    res.render('categories', {
      result: result.rows,
      style: 'categories',
    });
  }).catch(err => console.log(err));
};
