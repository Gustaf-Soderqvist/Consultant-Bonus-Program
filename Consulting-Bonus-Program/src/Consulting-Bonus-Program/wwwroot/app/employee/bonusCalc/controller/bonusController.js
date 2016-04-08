(function () {
    'use strict';

    angular
        .module('consBonusProgam')
        .controller('bonusController', bonusController);

    bonusController.$inject = ['employees', '$window'];

    function bonusController(employees, $window) {

        var vm = this;
        vm.netIncome = '';
        vm.employees = employees;
        employees.list().then(function (res, status, headers, config) {
            vm.employees = res.data;
        });

        vm.calculateBonusForEmployees = calculateBonusForEmployees;

        function calculateBonusPot() {
            var calculateBonusPot = 0;
            calculateBonusPot = $window.Math.round(0.05 * vm.netIncome);

            return calculateBonusPot
        };

        function calculateBillingPointsForEmployees() {
            var totalBillingPoints = 0;

            _.each(vm.employees, function (employee) {
                var billingPoints = $window.Math.round(employee.billedHours * employee.loyaltyFactor);
                totalBillingPoints += billingPoints;
                $.extend(employee, { billingPoints: billingPoints });
            })

            return totalBillingPoints;
        };

        function calculateBonusForEmployees(totalBillingPoints) {
            var bonusPot = calculateBonusPot();
            console.log(bonusPot);

            var totalBillingPoints = calculateBillingPointsForEmployees();
            console.log(totalBillingPoints);

            _.each(vm.employees, function (employee) {
                var bonus = $window.Math.round( bonusPot * (employee.billingPoints / totalBillingPoints))
                console.log(bonus);
                $.extend(employee, { bonus: bonus });
            })
        }

        activate();

        function activate() { }
    }
})();
