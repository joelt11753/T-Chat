(function ($scope) {
  function HomeCtrl(Room, $uibModal) {
    this.roomList = Room.all;

    this.openModal = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates//modals/addRoom.html',
        controller: 'AddRoomCtrl as modal',
      });
    };
  }

  angular
    .module('tChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
