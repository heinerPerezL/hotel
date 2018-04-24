(() => {
  'use strict';
  angular.module ('hoteles').controller ('controladorMain', controladorMain);

  controladorMain.$inject = ['$state', 'loginService'];

  function controladorMain ($state, loginService) {
    let vm = this;

    vm.authUser = loginService.getAutenticacion ();

    if (!vm.authUser) {
      $state.go ('logIn');
    }
  }
}) ();
