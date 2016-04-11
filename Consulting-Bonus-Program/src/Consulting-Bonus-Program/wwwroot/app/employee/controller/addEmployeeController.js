
angular.module('consBonusProgam').
    controller('addEmployeeController', ['employees', '$state', '$stateParams', function (employees, $state, $stateParams) {
        'use strict';
        var vm = this;

        vm.employee = {};
        vm.employee.firtName = '';
        vm.employee.lastName = '';
        vm.employee.dateOfEmployment = '';

        vm.save = save;

        function save(employee) {
            employees.save(employee).then(function () {
                $state.go("employee");
            });
        }
    }]);