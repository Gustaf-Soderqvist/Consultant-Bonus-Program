(function() {
    'use strict';

    angular
        .module('app')
        .directive('CalcDirective', CalcDirective);

    CalcDirective.$inject = ['$window'];
    
    function CalcDirective ($window) {
        // Usage:
        //     <CalcDirective></CalcDirective>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();