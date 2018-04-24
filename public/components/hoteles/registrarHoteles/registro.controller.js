(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('controladorRegistroHotel', controladorRegistroHotel);

  controladorRegistroHotel.$inject = ['$http', '$state', '$location', 'servicioHoteles', 'imageService', 'Upload'];

  function controladorRegistroHotel($http, $state, $location, servicioHoteles, imageService, Upload) {
    const vm = this;

    vm.nuevoHotel = {};

    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      console.log(pidCanton);
      vm.distritos = $http({
        method: 'GET',
        url: './sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }


    vm.cloudObj = imageService.getConfiguration();

    vm.preRegisterHotel = (pNuevoHotel) => {
      vm.cloudObj.data.file = pNuevoHotel.foto[0];
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.regitrarHotel(pNuevoHotel, data.url);
     });
    }
    
    vm.regitrarHotel = (pNuevoHotel, imgUrl) => {
      pNuevoHotel.foto = imgUrl;

      let tempHotel = Object.assign(new Hotel(), pNuevoHotel);

      let registroExitoso = servicioHoteles.addHotel(tempHotel);
      if (registroExitoso == 'Se registró el hotel correctamente') {
        swal("Registro exitoso", "El hotel ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        $location.path('/listaHoteles');
      }
    }

  }
})();