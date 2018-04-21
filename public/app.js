(() => {
    'use strict';
    angular
    .module('hotelesExamenProyecto', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();