(function () {
    'use strict';

    angular.module('consBonusProgam')

        .config(function ($stateProvider, $urlRouterProvider)
        {
            // for any unmatched url, redirect to state/1
            $urlRouterProvider.otherwise("/home");

            // Set up the states
            $stateProvider
                .state('home', {
                    url: "/home",
                    /* Home*/
                    views: {
                        'content@':
                        {
                            templateUrl: "app/home/home.html",
                            controller: "homeController as vm",
                        },
                        'title': {
                            template: 'home'
                        }
                    }
                })
                /* Employee*/
                .state('employee', {
                    url: "/employee",
                      views: {
                          'content@':
                          {
                              templateUrl: "app/employee/views/employee.html",
                              controller: "employeeController as vm",
                              resolve: {
                                  employeeList: function (employees) {
                                      return employees.list();
                                  }
                              }
                          },
                          'title': {
                              template: 'employee'
                         }
                   }
                })
                /* Bonus*/
                .state('bonus', {
                    url: "/bonus",
                    views: {
                        'content@':
                        {
                            templateUrl: "app/employee/bonusCalc/views/bonus.html",
                            controller: "bonusController as vm",
                            resolve: {
                                employeeList: function (employees) {
                                    return employees.list();
                                }
                            }
                        },
                        'title': {
                            template: 'bonus'
                        }
                    }
                })
                /* add employee*/
               .state('add', {
                   url: "/add",
                   views: {
                       'content@':
                       {
                           templateUrl: "app/employee/views/add.html",
                           controller: "addEmployeeController as vm"
                       },
                       'title': {
                           template: 'Add employee'
                       }
                   }
               })
                /* edit employee*/
               .state('edit', {
                   url: "/edit/:id",
                   views: {
                       'content@':
                       {
                           templateUrl: "app/employee/views/edit.html",
                           controller: "editEmployeeController as vm"
                       },
                       'title': {
                           template: 'edit employee'
                       }
                   }
               })
        });
})();