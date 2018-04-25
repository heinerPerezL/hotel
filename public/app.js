(() => {
    'use strict';
    angular
    .module('hoteles', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate','ngMap'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();