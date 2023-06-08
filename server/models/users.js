var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      'SELECT * FROM users',
      function(err, results, fields) {
        console.log('results', results);
        console.log('fields', fields);
        callback(null, results);
      }
    );
  },
  create: function (data, callback) {
    console.log('data', data);
    db.query(
      `INSERT INTO users (username) VALUES (${JSON.stringify(data.username)})`,
      function(err, results, fields) {
        console.log('results', results);
        console.log('fields', fields);
        if (err) {
          callback(err);
        }
        callback(null, results);
        // 'SELECT * FROM users';
      }
    );
  }
};
