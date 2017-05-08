(function () {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.sort = function () {
      var roomId = 1;
      return $firebaseArray(ref.orderByChild('room').equalTo(roomId));
    };

    return Message;
  }

  angular
    .module('tChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
