(() => {
  'use strict'
  angular
    .module('hoteles')
    .controller('controladorListarUsuario', controladorListarUsuario);
    
    controladorListarUsuario.$inject = ['$http','$stateParams', '$state', '$location', 'servicioUsuarios']

      function controladorListarUsuario($http,$stateParams, $state,  $location, servicioUsuarios) {
        let vm = this;

        
       vm.listaUsuarios = listarClientes();

        vm.editarUsuario = (pUsuario)=>{
          
        $state.go('editarUsuarios', {objClienteTemp : JSON.stringify(pUsuario)});
        };
        
        
       function listarClientes() {
        let listaUsuarios = servicioUsuarios.getUsuarios();
        let listaClientes = [];
        listaUsuarios.forEach(usuario => {
            if (usuario.tipo == '1') {
            listaClientes.push(usuario);
            }
        });
        return listaClientes;
        }

        



    }
 })();