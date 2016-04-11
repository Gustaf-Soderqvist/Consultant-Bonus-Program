
angular.module('consBonusProgam').
    factory('employees', ['$http', function ($http) {
        'use strict';

        var service = {
            save: save,
            load: get,
            list: list,
            remove: remove
        };

        function save(employee) {
            return $http.post('/api/employee', employee).then(function (res, status, headers, config) {
                return res.data;
            });
        }

        function remove(id) {
            return $http.delete('/api/employee/' + id).then(function (res, status, headers, config) {
                return res.data;
            });

        }

        function get(id) {
            return $http.get('/api/employee/' + id).then(function (res, status, headers, config) {
                return res.data;
            });
        }

        function list() {
            return $http.get('/api/employee');
        }

        return service;

    }]);