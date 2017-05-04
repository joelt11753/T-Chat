(function ($scope) {
  function HomeCtrl (Room) {
    this.roomList = Room.all;
    console.log(Room.all);
  }
  
  angular
    .module('tChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();