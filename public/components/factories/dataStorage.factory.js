(() => {
     'use strict';
  angular.module ('hoteles').factory ('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];


  function dataStorageFactory(){

    const dataAPI = {
        setUsuarioData : _setUsuarioData,
        getUsuarioData : _getUsuarioData,
        updateUsuarioData: _updateUsuarioData,
        buscarUsuarioPorId :_buscarUsuarioPorId,
        setSession :_setSession,
        closeSession :_closeSession,
        getSession :_getSession
        

        

    }

    return dataAPI;


    function _setUsuarioData(data) {
      let response;

      let petition = $.ajax( {
        url: 'http://localhost:4000/api/save_usuario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          cedula: data.cedula,
          primerNombre: data.primerNombre,
          segundoNombre: data.segundoNombre,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          fechaNacimiento: data.fechaNacimiento,
          email: data.email,
          tipo : data.tipo,
          telefono: data.telefono,
          password: data.password,
        },
      });

      petition.done(datos => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      petition.fail(error => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }


    function _getUsuarioData () {
     let listaUsuarios = [];

     let request = $.ajax({
               url: 'http://localhost:4000/api/get_all_usuarios',
               type: 'get',
               contentType: 'application/x-www-form-urlencoded; charset=utf-8',
               dataType: 'json',
               async: false,
               data:{},
          });


             request.done (usuarios => {
              console.log ('Datos que vienen desde la base de datos');
              console.log (usuarios);
              listaUsuarios = usuarios;
            });
            request.fail (() => {
              listaUsuarios = [];
              console.log ('Ocurrió un error');
            });
           

            return listaUsuarios;
    }


    function _updateUsuarioData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/update_usuarios',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'fechaNacimiento': data.fechaNacimiento,
          'email': data.email,
          'tipo' : data.tipo,
          'telefono': data.telefono,
          'password': data.password,
        },
      });

      peticion.done (datos => {
        response = datos.success;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
}

  function _buscarUsuarioPorId (pid) {
      let usuario = [];
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/buscar_user_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id: pid,
        },
      });

      peticion.done (function (response) {
        usuario = response;
      });

      peticion.fail (function () {});

      return usuario;
    }

    function _setSession (value) {
      let response = true;
      sessionStorage.setItem('session', JSON.stringify(value));

      return response;
    }

    function _closeSession () {
      let response = true;
      sessionStorage.removeItem('session');

      return response;
    }

    function _getSession () {

      let sessionActiva = JSON.parse(sessionStorage.getItem('session'));

      return sessionActiva;
    }


    




  }
   
   
  

    
})();