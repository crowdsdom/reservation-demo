'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.services.dataService',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.progress'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]).
run(function ($rootScope, data) {
    $rootScope.data = data;
});
