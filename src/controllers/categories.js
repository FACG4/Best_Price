const query = require('../database/queries/query');
const { categoryCommands } = require('../database/sql_commands');


exports.get = (req, res) => {
  query(categoryCommands.selectNoFilter).then((result) => {
    res.status(200).render('categories', {
      style: 'categories',
      result: result.rows,
      loggedIn: req.loggedIn,
      userName: req.userName,
    });
  }).catch(err => res.status(500).send({
    errorBody: err,
    errorMessage: 'internal server error',

  }));
};
