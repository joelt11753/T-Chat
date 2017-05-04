(function ($scope) {
  function HomeCtrl(Room) {
    this.roomList = Room.all;

    this.add = function (room) {
      Room.add(room);
    };
  } // end HomeCtrl

  angular
    .module('tChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
