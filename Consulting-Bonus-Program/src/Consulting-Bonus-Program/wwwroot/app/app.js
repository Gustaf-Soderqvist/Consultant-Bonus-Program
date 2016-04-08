(function () {
    'use strict';

    var underscore = angular.module('underscore', []);
    underscore.factory('_', function () {
        return window._;
    });

    angular.module('consBonusProgam', [
        'ui.router',
        'ngAnimate',
        'underscore'
    ]);
})();