var db = require('../db');
var users = require('./users');

module.exports = {
  mynameis: 'messages',
  getAll: function (callback) {
    var queryStr = 'SELECT messages.id, messages.text, messages.roomID, users.username FROM messages \
                    left outer join users on (messages.userid = users.id) \
                    order by messages.id desc';
    db.query(
      queryStr,
      function(err, results, fields) {
        return callback(null, results);
      }
    );
  },
  create: function ({ text, username, roomname }, callback) {
    db.query(
      `SELECT * FROM users WHERE username=${JSON.stringify(username)}`,
      function(err, user, fields) {
        if (err) {
          console.log('err', err);
        } else if (!user.length) {
          users.create({username}, function(err, result) {
            if (err) {
              console.log('err', err);
            }
            var queryStr = `INSERT INTO messages (text, userID) VALUES (?, ?)`;
            var params = [ text, result.insertId ];
            db.query(queryStr, params, function(err, results, fields) {
              if (err) {
                return callback(err);
              }
              return callback(null, results);
            });
          });
        } else {
          var queryStr = 'INSERT INTO messages (text, userID) VALUES (?, ?)';
          var params = [ text, user[0].id ];
          db.query(queryStr, params, function(err, results, fields) {
            if (err) {
              return callback(err);
            }
            return callback(null, results);
          });
        }
      }
    );
  }
};

