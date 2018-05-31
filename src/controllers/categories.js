const query = require('../database/queries/query');
const { sql } = require('../database/sql_commands');


exports.getMen = (req, res) => {
  let command;
  if (req.params.category === 'legs') {
    command = sql.menLegs;
  }
  if (req.params.category === 'top') {
    command = sql.menTop;
  }
  if (req.params.category === 'shoes') {
    command = sql.menShoes;
  }
  if (req.params.category === 'access') {
    command = sql.menacc;
  }

  query(command).then((result) => {
    res.render('categories', {
      result: result.rows,
      style: 'categories',
      loggedIn: req.loggedIn,
      userName: req.userName,
    });
  }).catch(err => console.log(err));
};
exports.getWomen = (req, res) => {
  let command;
  if (req.params.category === 'legs') {
    command = sql.womenLegs;
  }
  if (req.params.category === 'top') {
    command = sql.womenTop;
  }
  if (req.params.category === 'shoes') {
    command = sql.womenShoes;
  }
  if (req.params.category === 'access') {
    command = sql.womenacc;
  }

  query(command).then((result) => {
    res.render('categories', {
      result: result.rows,
      loggedIn: req.loggedIn,
      userName: req.userName,
    });
  }).catch(err => res.status(500).send({
    errorBody: err,
    errorMessage: 'internal server error',

  }));
};
