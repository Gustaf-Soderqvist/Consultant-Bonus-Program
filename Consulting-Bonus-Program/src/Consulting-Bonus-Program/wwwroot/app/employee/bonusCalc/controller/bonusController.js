
angular.module('consBonusProgam').
    controller('bonusController', ['employeeList', '$window', function (employeeList, $window) {
        'use strict';
         var vm = this;

        vm.netIncome = '';
        vm.employees = employeeList;
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