// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

const createRoomOption = function (room) {
  var roomTemplate = `<option value="${room}">${room}</option>`;
  RoomsView.$select.append(roomTemplate);
};

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);

    Rooms.initializeRooms();
    RoomsView.render();
  },

  render: function () {
    // TODO: Render out the list of rooms.
    const roomsList = Array.from(Rooms._data);
    RoomsView.$select.append(`<option value="${null}">Lobby</option>`);
    roomsList.forEach(createRoomOption);
  },

  renderRoom: function (roomname) {

  },

  handleChange: function (event) {
    Rooms.setCurrentRoom(this.value);
    MessagesView.render();
  },

  handleClick: function (event) {
    const newRoom = prompt('Enter a room name');
    // we add room to Rooms
    Rooms._data.add(newRoom);
    // set currentRoom
    Rooms.setCurrentRoom(newRoom);
    // update MessagesView
    MessagesView.initialize();

    // update value of select
    RoomsView.$select.append(`<option value="${newRoom}" selected>${newRoom}</option>`);

  }
};

/* `"\x3Cscript>$(‘#chats’).children().css(“color”, “green”)\x3C/script> "` */
