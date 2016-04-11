
angular.module('consBonusProgam').
    controller('editEmployeeController', ['employees', '$state', '$stateParams', function (employees, $state, $stateParams) {
        'use strict';
        var vm = this;

        vm.save = save;
        vm.remove = remove;

        function save(employee) {
            employees.save(employee).then(function () {
                $state.go("employee");
            });
        }
        function remove(employee) {
            employees.remove(employee.id).then(function () {
                $state.go("employee");
            });
        }

        activate();

        function activate() {
            var id = $stateParams.id;
            employees.load(id).then(function (employee) {
                vm.employee = employee;
            });
        }
    }]);

