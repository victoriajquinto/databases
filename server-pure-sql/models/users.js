var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      'SELECT * FROM users',
      function(err, results, fields) {
        callback(null, results);
      }
    );
  },
  create: function (data, callback) {
    console.log('data', data);
    db.query(
      `INSERT INTO users (username) VALUES (${JSON.stringify(data.username)})`,
      function(err, results, fields) {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
        // 'SELECT * FROM users';
      }
    );
  }
};
