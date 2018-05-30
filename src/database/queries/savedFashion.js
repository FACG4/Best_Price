const dbconnection = require('../db_connection');

const savedFashion = (userId, cb) => {
  const savedFashionSql = {
    text:
      'select items.img, items.name, items.price, items.gender,items.id from items inner join saved on saved.items_id = items.id and user_id = $1',
    values: [userId],
  };
  dbconnection.query(
    savedFashionSql,
    (dbError, savedFashion) => {
      if (dbError) return cb(dbError);

      return cb(null, savedFashion.rows);
    },
  );
};

const saved = (userId, clothId, cb) => {
  const savedSql = {
    text: 'insert into saved (user_id, items_id) values ($1, $2)',
    values: [userId, clothId],
  };
  dbconnection.query(savedSql, (dbError, successSaved) => {
    if (dbError) return cb(dbError);
    return cb(null, successSaved);
  });
};

const unsaved = (userId, clothId, cb) => {
  const unsavedSql = {
    text: 'DELETE FROM saved WHERE items_id =$1 and user_id=$2',
    values: [clothId, userId],
  };
  dbconnection.query(unsavedSql, (dbError, successUnsaved) => {
    if (dbError) return cb(dbError);
    return cb(null, successUnsaved);
  });
};

const checked = (userId, clothId, cb) => {
  const checkedSql = {
    text:
      'SELECT * FROM saved WHERE items_id=$1 AND user_id=$2',
    values: [userId, clothId],
  };
  dbconnection.query(
    checkedSql,
    (dbError, checked) => {
      if (dbError) return cb(dbError);

      return cb(null, checked.rows);
    },
  );
};

module.exports = {
  savedFashion, saved, unsaved, checked,
};
