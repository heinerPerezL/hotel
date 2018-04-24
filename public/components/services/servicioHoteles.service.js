(() => {
  'use strict';
  angular.module ('hoteles').service ('servicioHoteles', servicioHoteles);

  servicioHoteles.$inject = ['$log', '$http', 'dataStorageFactory'];

  function servicioHoteles ($log, $http, dataStorageFactory) {
    let publicAPI = {
      addHotel: _addHotel,
      getHoteles: _getHoteles,
      actualizarHotel: _actualizarHotel
    };
    return publicAPI;

    function _addHotel (pNuevoHotel) {
      let registro;

      registro = dataStorageFactory.setHotelData (pNuevoHotel);

      return registro;
    }

    
    function _getHoteles () {
      let listaHotelesDB = dataStorageFactory.getHotelData (),
        listaHoteles = [];

      listaHotelesDB.forEach (objHotel => {
        let nuevoHotel = Object.assign (new Hotel (), objHotel);
        listaHoteles.push (nuevoHotel);

        nuevoHotel.setIdHotel (objHotel._id);
      });

      return listaHoteles;
    }

    function _actualizarHotel (pEditHotel) {
      let modificacionExitosa = false;

      modificacionExitosa = dataStorageFactory.updateHotelData (pEditHotel);

      return modificacionExitosa;
    }
  }
}) ();
