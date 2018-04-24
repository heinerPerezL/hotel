(() => {
  'use strict'
  angular
    .module('hoteles')
    .controller('controladorListarUsuario', controladorListarUsuario);
    
    controladorListarUsuario.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioUsuarios']

      function controladorListarUsuario($http, $state, $scope, $location,$stateParams, servicioUsuarios) {
        let vm = this;

        // vm.editArticulo = (pArticulo)=>{


          
        // $state.go('main.editarArticulo', {objArticuloTemp : JSON.stringify(pArticulo)});
        // };
        
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