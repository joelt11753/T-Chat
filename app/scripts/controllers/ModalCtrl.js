(function () {
  function ModalCtrl($uibModalInstance, Room, $cookies) {
    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
    this.create = function () {
      Room.add(this.newRoom);
      $uibModalInstance.dismiss();
    };
    
    this.createUsername = function () {
      $cookies.put('tChatCurrentUser', this.username);
      $uibModalInstance.close();
    }
    
  }

  angular
    .module('tChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', '$cookies', ModalCtrl]);
})();
