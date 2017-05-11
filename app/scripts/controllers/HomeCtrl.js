(function ($scope) {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    this.roomList = Room.all;

    this.messages = Message.sort(1);
    this.activeRoom = null;

    this.openModal = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates//modals/addRoom.html',
        controller: 'ModalCtrl as modal',
      });
    }; // end open modal

    this.currentRoom = function (room) {
      this.activeRoom = room;
      this.messages = Message.sort(this.activeRoom.$id);
    }; // end currentRoom
  } // end HomeCtrl

  angular
    .module('tChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
