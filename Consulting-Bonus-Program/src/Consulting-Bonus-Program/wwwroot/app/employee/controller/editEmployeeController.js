(function () {
    'use strict';

    angular
        .module('consBonusProgam')
        .controller('editEmployeeController', editEmployeeController);

    editEmployeeController.$inject = ['employees', '$state', '$stateParams'];

    function editEmployeeController(employees, $state, $stateParams) {

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
    }
})();

