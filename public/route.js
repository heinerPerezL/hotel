(() => {
    'use strict'
    angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

         $stateProvider
         .state('landingPage',{
             url:'/',
             templateUrl:
             './components/landingPage/landingPage.view.html',
             data:{
                 pageTitle: 'Hoteles'
             }
         })

         .state('logIn', {
        url: '/logIn',
        templateUrl: './components/login/login.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/login/login.controller.js')
          }]
        },
        controller: 'controladorLogin',
        controllerAs: 'vm'
      })

         .state('main', {
        url: '/main',
        templateUrl: './components/main/main.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/main/main.controller.js')
          }]
        },
        controller: 'controladorMain',
        controllerAs: 'vm'
      })

      .state('registrarUsario', {
        url: '/registrarUsuario',
        templateUrl: './components/usuarios/registroUsuario/RegistroUsuarios.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/registroUsuario/RegistroUsuario.controller.js')
          }]
        },
        controller: 'controladorRegistrarUsuario',
        controllerAs: 'vm'
      })

       .state('listarUsuario', {
        url: '/listarUsuario',
        templateUrl: './components/usuarios/listarUsuarios/listarUsuarios.view.html',
        data:{
          pageTitle: 'Lista clientes'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/listarUsuarios/listarUsuario.controller.js')
          }]
        },
        controller: 'controladorListarUsuario',
        controllerAs: 'vm'
      })

       .state('editarUsuarios', {
        url: '/editarUsuarios',
        templateUrl: './components/usuarios/editarUsuario/editarUsuario.view.html',
        data:{
          pageTitle: 'editar cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/editarUsuario/editarUsuario.controller.js')
          }]
        },
        controller: 'controladorEditarUsuario',
        controllerAs: 'vm'
      })

      .state('registrarHotel', {
        url: '/registrarHotel',
        templateUrl: './components/hoteles/registrarHoteles/registroHotel.view.html',
        data:{
          pageTitle: 'registro hotel'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/registrarHoteles/registro.controller.js')
          }]
        },
        controller: 'controladorRegistroHotel',
        controllerAs: 'vm'
      })

      .state('listarHotel', {
        url: '/listarHotel',
        templateUrl: './components/hoteles/listarHoteles/listarHoteles.view.html',
        data:{
          pageTitle: 'listar hotel'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/listarHoteles/listarHoteles.controller.js')
          }]
        },
        controller: 'controladorListarHotel',
        controllerAs: 'vm'
      })

      .state('editarHotel', {
        url: '/editarHotel',
        templateUrl: './components/hoteles/editarHotel/editarHotel.view.html',
        data:{
          pageTitle: 'editar hotel'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/editarHotel/editarHotel.controller.js')
          }]
        },
        controller: 'controladorEditarHotel',
        controllerAs: 'vm'
      })



         $urlRouterProvider.otherwise('/');


    }
})();