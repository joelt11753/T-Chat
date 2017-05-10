(function () {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.sort = function (room) {
      room = parseInt(room);
      return $firebaseArray(ref.orderByChild('room').equalTo(room));
    };

    return Message;
  }

  angular
    .module('tChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
