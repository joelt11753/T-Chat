(function ($scope) {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    this.roomList = Room.all;

    this.messages = Message.sort("-KjqDidDEcHiU_XYtIDj");
    this.activeRoom = null;
    this.currentUser = $cookies.get('tChatCurrentUser');

    this.openModal = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates//modals/addRoom.html',
        controller: 'ModalCtrl as modal',
      });
    };

    this.currentRoom = function (room) {
      this.activeRoom = room;

      this.messages = Message.sort(this.activeRoom.$id);
    };

    this.sendMessage = function () {
      if (this.activeRoom === null) {
        this.newMessage.room = "-KjqDidDEcHiU_XYtIDj";
      } else {
        this.newMessage.room = this.activeRoom.$id;
      }
      this.newMessage.user = this.currentUser;
      Message.send(this.newMessage);

    };
  }

  angular
    .module('tChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
