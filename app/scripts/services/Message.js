(function () {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.sort = function (room) {
      room = room;
      return $firebaseArray(ref.orderByChild('room').equalTo(room));
    };
    
    Message.send = function (message) {
            message.time = firebase.database.ServerValue.TIMESTAMP;
      messages.$add(message);
    };

    return Message;
  }

  angular
    .module('tChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
