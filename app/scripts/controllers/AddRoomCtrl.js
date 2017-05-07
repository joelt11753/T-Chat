(function () {
  function AddRoomCtrl(Room) {
    this.cancel = function () {
      
    };
  }

  angular
    .module('tChat')
    .controller('AddRoomCtrl', ['$uibModalInstance', 'Room', AddRoomCtrl]);
})();
