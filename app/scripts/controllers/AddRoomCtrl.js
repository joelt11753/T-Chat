(function () {
  function AddRoomCtrl($uibModalInstance, Room) {
    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
    this.create = function () {
      Room.add(this.newRoom);
      $uibModalInstance.dismiss();
    };
  }

  angular
    .module('tChat')
    .controller('AddRoomCtrl', ['$uibModalInstance', 'Room', AddRoomCtrl]);
})();
