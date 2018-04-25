(()=>{

 'use strict';
    angular
        .module('hoteles')
        .service('servicioUsuarios', servicioUsuarios)

    servicioUsuarios.$inject = ['$log', '$http','dataStorageFactory'];

    function servicioUsuarios($log, $http, dataStorageFactory) {

        

        let publicAPI = {
            addUsuario: _addUsuario,
            getUsuarios: _getUsuarios,
            actualizarUsuario:_actualizarUsuario
           
            }
        return publicAPI;



        function _addUsuario(pNuevoUsuario) {

          let registro;
            
          registro = dataStorageFactory.setUsuarioData(pNuevoUsuario);

           return registro;


        }


        function _getUsuarios() {
            let listaUsuariosDB = dataStorageFactory.getUsuarioData(),
                listaUsuarios = [];

               

                listaUsuariosDB.forEach(obj => {
                    
                        let nuevoUsuario = Object.assign(new Usuario(), obj);
                         nuevoUsuario.actualizarEstadoUsuario(obj.estado);


                        listaUsuarios.push(nuevoUsuario);

                        nuevoUsuario.setId(obj._id);
                    
                });

                return listaUsuarios;
        }

        function _actualizarUsuario(pEditUsuario) {
             let modificacionExitosa = false;

                 modificacionExitosa = dataStorageFactory.updateUsuarioData(pEditUsuario);

                return modificacionExitosa;
        }






        }


})();