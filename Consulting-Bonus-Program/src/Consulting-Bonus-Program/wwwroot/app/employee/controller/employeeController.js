
angular.module('consBonusProgam').
    controller('employeeController', ['employeeList', '$state', '$stateParams', function (employeeList, $state, $stateParams) {
        'use strict';
        var vm = this;

        vm.employees = employeeList;

        vm.addEmployee = addEmployee;
        vm.editEmployee = editEmployee;

        function addEmployee() {
            $state.go('add');
        };

        function editEmployee(employee) {
            $state.go('edit', { id: employee.id });
        };
}]);
