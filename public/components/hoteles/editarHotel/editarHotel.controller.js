
(() => {
  'use strict';
  angular
    .module ('hoteles')
    .controller ('controladorEditarHotel', controladorEditarHotel);

  controladorEditarHotel.$inject = [ '$http','$stateParams','$state','$location','servicioHoteles','imageService', 'Upload', 'NgMap', 'loginService'];

  function controladorEditarHotel ( $http,$stateParams,$state, $location, servicioHoteles,imageService, Upload, NgMap, loginService ) {
    let vm = this;

    vm.cerrarSesion = loginService.logOut();


    vm.editHotel = {};

    let objHotelAEditar = JSON.parse ($stateParams.objHotelTemp);

    let objHotelNuevo = Object.assign (new Hotel (), objHotelAEditar);

    //  vm.objHotelNuevo.setId(objHotelAEditar._id);

    vm.editHotel.foto = objHotelNuevo.foto;
    vm.editHotel.nombre = objHotelNuevo.nombre;
    vm.editHotel.latitud = objHotelNuevo.latitud;
    vm.editHotel.longitud = objHotelNuevo.longitud;
    vm.editHotel.provincia = objHotelNuevo.provincia;
    vm.editHotel.canton = objHotelNuevo.canton;
    vm.editHotel.distrito = objHotelNuevo.distrito;
    vm.editHotel.direccionExacta = objHotelNuevo.direccionExacta;
    vm.editHotel.telefono = objHotelNuevo.telefono;
    vm.editHotel.telefonoServicio = objHotelNuevo.telefonoServicio;
    vm.editHotel.email = objHotelNuevo.email;
    vm.editHotel.emailServicio = objHotelNuevo.emailServicio;
    
    
    vm.cloudObj = imageService.getConfiguracion ();

    vm.editarHotel = (pNewHotel) => {
  vm.cloudObj.data.file = pNewHotel.foto[0];
  Upload.upload (vm.cloudObj).success ((data) => {
    vm.completarEdicionHotel (pNewHotel, data.url);
  });
};




vm.pos = [JSON.stringify(vm.editHotel.latitud), JSON.stringify(vm.editHotel.longitud)];
      vm.getCurrentLocation = ($event) => {
        let postion = [$event.latLng.lat(), $event.latLng.lng()];
        console.log(postion);
        vm.current = postion;
      }


    vm.completarEdicionHotel = (pHotel,url) => {
      let listaHoteles = servicioHoteles.getHoteles();
      pHotel.foto = url;
      pHotel.latitud = vm.current[0];
      pHotel.longitud = vm.current[1];



      listaHoteles.forEach (objEditar => {
        if (objEditar._id == objHotelNuevo._id) {
          objEditar.foto = pHotel.foto;
          objEditar.nombre = pHotel.nombre;
          objEditar.latitud = pHotel.latitud;
          objEditar.longitud = pHotel.longitud;
          objEditar.provincia = pHotel.provincia;
          objEditar.canton = pHotel.canton;
          objEditar.distrito = pHotel.distrito;
          objEditar.direccionExacta = pHotel.direccionExacta;
          objEditar.telefono = pHotel.telefono;
          objEditar.telefonoServicio = pHotel.telefonoServicio;
          objEditar.email = pHotel.email;
          objEditar.emailServicio = pHotel.emailServicio;
          
          

          servicioHoteles.actualizarHotel (objEditar);
        }
      });
      $state.go ('listarHotel');
    };

     vm.Eliminar = (pEstado)=>{
          let listaHoteles = servicioHoteles.getHoteles();
          let hotel = {};
          listaHoteles.forEach(objHotel => {
            if (objHotel._id === objHotelAEditar._id) {
              
              objHotel.actualizarEstado(pEstado);
              hotel = objHotel;
            }
           servicioHoteles.actualizarHotel (hotel);
          });
          $state.go ('listarHotel');
        };

         vm.Activar = (pEstado)=>{
          let listaHoteles = servicioHoteles.getHoteles();
          let hotel = {};
          listaHoteles.forEach(objHotel => {
            if (objHotel._id === objHotelAEditar._id) {
              
              objHotel.actualizarEstado(pEstado);
              hotel = objHotel;
            }
           servicioHoteles.actualizarHotel (hotel);
          });
          $state.go ('listarHotel');
        };
  }
}) ();
