// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(() => {
      App.stopSpinner();
      FormView.initialize();
      MessagesView.initialize();
      RoomsView.initialize();
    });
    var interval = setInterval(() => {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    }, 10000);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.setData(data);
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
