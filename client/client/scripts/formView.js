// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.
const getUsername = () => new URLSearchParams(window.location.search).get('username');
const getRoomName = () => Rooms._currentRoom;
var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSuccuss: function (response) {
    console.log(response);
    App.fetch(MessagesView.initialize);
  },

  handleError: function (error) {
    console.error(error);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    const text = event.target[0].value;
    const username = getUsername();
    const roomname = getRoomName();
    const message = {
      username,
      text,
      roomname
    };
    Parse.create(message, FormView.handleSuccuss, FormView.handleError);
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};