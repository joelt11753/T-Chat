(function ($scope) {
  function HomeCtrl(Room, $uibModal) {
    this.roomList = Room.all;

    this.openModal = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'AddRoomCtrl',
        controllerAs: 'roomModal'
      });
    };
  }

  angular
    .module('tChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
