(function () {
    'use strict';

    angular.module('consBonusProgam')
        .controller('employeeController', employeeController);

    employeeController.$inject = ['employees', '$state', '$stateParams'];

    function employeeController(employees, $state, $stateParams) {

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
    }
})();
