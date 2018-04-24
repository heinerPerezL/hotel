(()=>{
 'use strict';

 angular
 .module('hoteles')
 .service('loginService', loginService );

loginService.$inject = ['servicioUsuarios', 'dataStorageFactory'];

function loginService(servicioUsuarios, dataStorageFactory) {
    
    const loginAPI = {
        login: _login,
        logOut: _logOut,
        getAutenticacion: _getAutenticacion
    }
    return loginAPI;

    function _login(pCredenciales) {
        let listaUsuarios = servicioUsuarios.getUsuarios();
        let success = false;

        for (let i = 0; i < listaUsuarios.length; i++) {
             if (listaUsuarios[i].email == pCredenciales.email && listaUsuarios[i].password == pCredenciales.password) {
                 let credencialesCorrectas = {
                     id: listaUsuarios.cedula,
                     rol: listaUsuarios.tipo
                 }


                 success = dataStorageFactory.setSession(credencialesCorrectas);
             }            
        }

        return success;
    }

    function _logOut() {
        let success = dataStorageFactory.closeSession();
        return success;
    }

    function _getAutenticacion() {
         let activeSession = dataStorageFactory.getSession(),
                userData;

            if (!activeSession) {
                userData = undefined;
            } else {
                userData = obtenerDatosUsuarioActivo(activeSession.id);
            }

            return userData;

    }

        function obtenerDatosUsuarioActivo(pcedula) {
            let listaUsuarios = servicioUsuarios.getUsuarios(),
                userData;

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].cedula == pcedula) {
                    userData = listaUsuarios[i];
                }
            };


}
}

})();