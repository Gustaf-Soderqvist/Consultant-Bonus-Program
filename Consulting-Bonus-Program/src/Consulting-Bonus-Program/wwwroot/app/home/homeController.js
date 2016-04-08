(function () {
    'use strict';

    angular
        .module('consBonusProgam')
        .controller('homeController', homeController);

    homeController.$inject = ['$state'];

    function homeController($state) {

        var vm = this;

        vm.directToEmployee = function () {
            $state.go("employee");
        }

        vm.directToBonusCalc = function () {
            $state.go("bonus");
        }

        activate();

        function activate() { }
    }
})();
