(function () {
  function tChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('tChatCurrentUser');

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: 'templates/modals/login.html',
        size: 'sm',
        controller: 'ModalCtrl as modal',
        keyboard: false,
        backdrop: 'static'
      });
    }
  } // end tChatCookies

  angular
    .module('tChat')
    .run(['$cookies', '$uibModal', tChatCookies]);
})();
