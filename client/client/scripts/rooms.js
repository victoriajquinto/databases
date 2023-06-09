// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  _currentRoom: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (roomName) {
    Rooms._data.add(roomName);
  },

  initializeRooms: function () {
    Messages._data.forEach(function (message) {
      let room = message.roomname;
      if (room && room.length && room !== 'null') {
        Rooms._data.add(room);
      }
    });
  },

  setCurrentRoom: function (room) {
    Rooms._currentRoom = room;
  }

};