(() => {
  'use strict';
  angular.module ('hoteles').service ('imageService', imageService);

  imageService.$inject = ['$http'];

  function imageService ($http) {
    let cloudObj = {
      url: 'https://api.cloudinary.com/v1_1/dc38rw6m7/image/upload',
      data: {
        upload_preset: 'hoteles',
        tags: 'Any',
        context: 'photo=test',
      },
    };

    let publicAPI = {
      getConfiguracion: _getConfiguracion,
    };
    return publicAPI;

    function _getConfiguracion () {
      return cloudObj;
    }
  }
}) ();
