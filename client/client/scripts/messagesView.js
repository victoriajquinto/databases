// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {
  $chats: $('#chats'),

  initialize: function () {
    MessagesView.render();
    console.log(Messages);
  },

  render: function () {
    MessagesView.$chats.empty();
    for (var message of Messages._data) {
      if (!Rooms._currentRoom || message.roomname === Rooms._currentRoom) {
        MessagesView.renderMessage(message);
      }
    }
  },

  renderMessage: function (message) {
    var template = MessageView.render(message);
    var $node = $(template);
    $node.on('click', () => MessagesView.handleClick(message));
    $('#chats').append($node);
  },

  handleClick: function ({ username }) {
    Friends.add(username);
    console.log(Friends._data);
  }
};
