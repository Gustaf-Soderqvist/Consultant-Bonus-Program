
angular.module('consBonusProgam').
    controller('employeeController', ['employees', '$state', '$stateParams', function (employees, $state, $stateParams) {
        'use strict';
        var vm = this;

        vm.employees = employees
        // return list with employees
        employees.list().then(function (res, status, headers, config) {
             vm.employees = res.data;
        });

        vm.addEmployee = addEmployee;
        vm.editEmployee = editEmployee;

        function addEmployee() {
            $state.go('add');
        };

        function editEmployee(employee) {
            $state.go('edit', { id: employee.id });
        };
}]);
