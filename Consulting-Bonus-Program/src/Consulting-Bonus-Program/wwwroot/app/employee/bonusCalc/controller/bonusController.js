
angular.module('consBonusProgam').
    controller('bonusController', ['employees', '$window', function (employees, $window) {
        'use strict';
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
   
                if (isNaN(employee.billedHours)) {
                    return employee.billingPoints = 0;
                }

                var billingPoints = $window.Math.round(employee.billedHours * employee.loyaltyFactor);
                totalBillingPoints += billingPoints;
                $.extend(employee, { billingPoints: billingPoints });
            })

            return totalBillingPoints;
        };

        function calculateBonusForEmployees(totalBillingPoints) {
            var bonusPot = calculateBonusPot();
            var totalBillingPoints = calculateBillingPointsForEmployees();

            _.each(vm.employees, function (employee) {
                var bonus = $window.Math.round(bonusPot * (employee.billingPoints / totalBillingPoints))
                $.extend(employee, { bonus: bonus });
            })
        }
    }]);