(()=>{
    angular
    .module('hoteles')
    .controller('controladorLogin', controladorLogin);

    controladorLogin.$inject = ['$state','loginService'];

    function controladorLogin($state, loginService){
        const vm = this;

        vm.credenciales = {};

     vm.login = (credenciales) =>{
         let success = loginService.login(credenciales);

             if (success == true) {
                $state.go('main');
            } else {
                swal({
                    title: "Inicio de sesión fallido",
                    text: "Los datos ingresados son incorrectos",
                    icon: "error",
                    button: "Aceptar",
                });
            }
     }
    }
    
})();