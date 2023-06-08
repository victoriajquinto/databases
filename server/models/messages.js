var db = require('../db');

module.exports = {
  mynameis: 'messages',
  getAll: function (callback) {
    db.query(
      'SELECT * FROM messages',
      function(err, results, fields) {
        console.log('results', results);
        console.log('fields', fields);
        callback(null, results);
      }
    );
  }, // a function which produces all the messages
  create: function ({ message, username, roomname }, callback) {
    console.log('message', message);
    db.query(
      `INSERT INTO messages (text) VALUES (${JSON.stringify(message)})`,
      function(err, results, fields) {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  } // a function which can be used to insert a message into the database
};

