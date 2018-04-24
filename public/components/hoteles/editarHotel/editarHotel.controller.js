(() => {
  'use strict';
  angular
    .module ('hoteles')
    .controller ('controladorEditarHotel', controladorEditarHotel);

  controladorEditarHotel.$inject = [ '$http','$state','$stateParams','$location','servicioHoteles',];

  function controladorEditarHotel ( $http,$state,$stateParams, $location, servicioHoteles ) {
    let vm = this;

    vm.editHotel = {};

    let objHotelAEditar = JSON.parse ($stateParams.objHotelTemp);

    let objHotelNuevo = Object.assign (new Hotel (), objHotelAEditar);

    //  vm.objHotelNuevo.setId(objHotelAEditar._id);

    vm.editHotel.foto = objHotelAEditar.foto;
    vm.editHotel.nombre = objHotelAEditar.nombre;
    vm.editHotel.latitud = objHotelAEditar.latitud;
    vm.editHotel.longitud = objHotelAEditar.longitud;
    vm.editHotel.provincia = objHotelAEditar.provincia;
    vm.editHotel.canton = objHotelAEditar.canton;
    vm.editHotel.distrito = objHotelAEditar.distrito;
    vm.editHotel.direccionExacta = objHotelAEditar.direccionExacta;
    vm.editHotel.telefono = objHotelAEditar.telefono;
    vm.editHotel.telefonoServicio = objHotelAEditar.telefonoServicio;
    vm.editHotel.email = objHotelAEditar.email;
    vm.editHotel.emailServicio = objHotelAEditar.emailServicio;
    

    vm.editarHotel = pHotel => {
      let listaHoteles = servicioHoteles.getHoteles ();

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
      $state.go ('listarUsuarios');
    };
  }
}) ();
