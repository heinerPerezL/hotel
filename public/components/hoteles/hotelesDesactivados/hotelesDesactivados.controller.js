(() => {
  'use strict'
  angular
    .module('hoteles')
    .controller('controladorHotelesDesactivados', controladorHotelesDesactivados);
    
    controladorHotelesDesactivados.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioHoteles']

      function controladorHotelesDesactivados($http, $state, $scope, $location,$stateParams, servicioHoteles) {
        let vm = this;

        // vm.editArticulo = (pArticulo)=>{


          
        // $state.go('main.editarArticulo', {objArticuloTemp : JSON.stringify(pArticulo)});
        // };
        
       vm.listaHoteles = servicioHoteles.getHoteles();

        vm.editarHotel = (pHotel)=>{
          
        $state.go('editarHotel', {objHotelTemp : JSON.stringify(pHotel)});
        };
        

       
        
       
        



    }
 })();