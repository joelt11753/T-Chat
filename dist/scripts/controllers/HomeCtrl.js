(function ($scope) {
  function HomeCtrl(Room, Message, $uibModal) {
    this.roomList = Room.all;
    
    this.messages = Message.sort;

    this.openModal = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates//modals/addRoom.html',
        controller: 'AddRoomCtrl as modal',
      });
    };
  }

  angular
    .module('tChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
