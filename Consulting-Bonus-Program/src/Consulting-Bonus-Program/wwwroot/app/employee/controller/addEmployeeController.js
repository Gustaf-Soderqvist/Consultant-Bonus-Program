(function () {
    'use strict';

    angular
        .module('consBonusProgam')
        .controller('addEmployeeController', addEmployeeController);

    addEmployeeController.$inject = ['employees', '$state'];

    function addEmployeeController(employees, $state) {

        var vm = this;
        vm.employee = {};

        vm.employee.firtName = '';
        vm.employee.lastName = '';
        vm.employee.DateOfEmployment = '';

        vm.save = save;

        function save(employee) {
            employees.save(employee).then(function () {
                $state.go("employee");
            });
        }

        activate();

        function activate() {
        }
    }
})();
