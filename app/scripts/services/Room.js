(function () {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function (room) {
      Room.$add({
        name: room
      });
    };

    return Room;
  } // end Room

  angular
    .module('tChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
