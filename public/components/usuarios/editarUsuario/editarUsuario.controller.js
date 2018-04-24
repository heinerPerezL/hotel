(() => {
  'use strict';
  angular
    .module ('hoteles')
    .controller ('controladorEditarUsuario', controladorEditarUsuario);

  controladorEditarUsuario.$inject = ['$http', '$state','$stateParams','$location','servicioUsuarios',];

  function controladorEditarUsuario ($http,$state,$stateParams,$location,servicioUsuarios) {
    let vm = this;

    vm.editUsuario = {};

    let objUsuarioAEditar = JSON.parse ($stateParams.objClienteTemp);

    let objUsuarioNuevo = Object.assign (new Usuario(),objUsuarioAEditar);

  //  vm.objUsuarioNuevo.setId(objUsuarioAEditar._id);



    vm.editUsuario.cedula = objUsuarioAEditar.cedula;
    vm.editUsuario.primerNombre = objUsuarioAEditar.primerNombre;
    vm.editUsuario.segundoNombre = objUsuarioAEditar.segundoNombre;
    vm.editUsuario.primerApellido = objUsuarioAEditar.primerApellido;
    vm.editUsuario.segundoApellido = objUsuarioAEditar.segundoApellido;
    vm.editUsuario.fechaNacimiento = objUsuarioAEditar.fechaNacimiento;
    vm.editUsuario.email = objUsuarioAEditar.email;
    vm.editUsuario.telefono = objUsuarioAEditar.telefono;
    vm.editUsuario.password = objUsuarioAEditar.password;
        

    

    vm.editarUsuario = pUsuario => {
      let listaUsuarios = servicioUsuarios.getUsuarios();

      listaUsuarios.forEach (objEditar => {
        if (objEditar._id == objUsuarioNuevo._id) {
          objEditar.cedula = pUsuario.cedula;
          objEditar.primerNombre = pUsuario.primerNombre;
          objEditar.segundoNombre = pUsuario.segundoNombre;
          objEditar.primerApellido = pUsuario.primerApellido;
          objEditar.segundoApellido = pUsuario.segundoApellido;
          objEditar.fechaNacimiento = pUsuario.fechaNacimiento;
          objEditar.email = pUsuario.email;
          objEditar.telefono = pUsuario.telefono;
          objEditar.password = pUsuario.password;
          

          servicioUsuarios.actualizarUsuario (objEditar);
        }
      });
      $state.go ('listarUsuarios');
    };
  }
}) ();
