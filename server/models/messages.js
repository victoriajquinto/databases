var db = require('../db');

module.exports = {
  mynameis: 'messages',
  getAll: function () {
    /* db.query(
      'SELECT * FROM messages',
      function(err, results, fields) {
        console.log('results', results);
        console.log('fields', fields);
      }
    ); */
  }, // a function which produces all the messages
  create: function (data, callback) {
    console.log('data', data);
    db.query(
      `INSERT INTO messages (text) VALUES (${JSON.stringify(data.text)})`,
      function(err, results, fields) {
        if (err) {
          callback(err);
        }
        callback(null, results);
      }
    );
  } // a function which can be used to insert a message into the database
};

