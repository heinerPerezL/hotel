(() => {
  'use strict'
  angular
    .module('hoteles')
    .controller('controladorUsuariosDesactivados', controladorUsuariosDesactivados);
    
    controladorUsuariosDesactivados.$inject = ['$http','$stateParams', '$state', '$location', 'servicioUsuarios']

      function controladorUsuariosDesactivados($http,$stateParams, $state,  $location, servicioUsuarios) {
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