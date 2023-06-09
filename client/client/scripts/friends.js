// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  add: function (username) {
    this._data.push({
      username,
      currentlyFriends: true
    });
  },

  check: function (friendName) {
    for (var i = 0; i < this._data.length; i++) {
      if (this._data[i].username === friendName) {
        return this._data[i].currentlyFriends;
      }
    }
    return false;
  },

  toggle: function (friendName) {
    for (var i = 0; i < this._data.length; i++) {
      if (this._data[i].username === friendName) {
        this._data[i].currentlyFriends = !this._data[i].currentlyFriends;
      }
    }
  },



  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};