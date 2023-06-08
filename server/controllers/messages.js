var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('req.body', req.body);
    models.messages.getAll( (err, messages) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).json(messages);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('req.body', req.body);
    console.log('models.messages.mynameis', models.messages.mynameis);
    models.messages.create(req.body, (err, newMessage) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).json(newMessage);
      }
    });
  } // a function which handles posting a message to the database
};
