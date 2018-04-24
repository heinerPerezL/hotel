(()=> {

'use strict';
  angular
    .module ('hoteles')
    .controller ('controladorRegistrarUsuario', controladorRegistrarUsuario);

  controladorRegistrarUsuario.$inject = ['$http','$state','$stateParams','$location','servicioUsuarios' ];

  function controladorRegistrarUsuario ( $http, $state, $stateParams, $location, servicioUsuarios) {
   
    const vm = this;

    vm.nuevoUsuario ={};

    vm.regitrarUsuario = (pNuevoUsuario)=>{

      let usuarioTemp = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.primerNombre,  pNuevoUsuario.segundoNombre,  pNuevoUsuario.primerApellido,  pNuevoUsuario.segundoApellido,  pNuevoUsuario.fechaNacimiento, pNuevoUsuario.email, '1', pNuevoUsuario.telefono, pNuevoUsuario.password);

     // let nuevoUsuario = Object.assign(new Usuario(), pNuevoUsuario);

      let registroExitoso = servicioUsuarios.addUsuario(usuarioTemp);

        if(registroExitoso == 'Se registró el articulo correctamente'){
          swal({
            title: "registro Exitiso",
            text: "El usuario se ha regidtra do de forma correcta",
            icon: "success",
            button: "aceptar"

          });
          vm.nuevoUsuario = null;
        }else{
          swal({
            title: "registro fallido",
            text: "error al registrar",
            icon: "error",
            button: "aceptar"
          })
        }



    }
   

  }

})();