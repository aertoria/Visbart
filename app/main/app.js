'use strict';


/* App Module */
var mvcApp = angular.module('mvcApp', [
    'ngRoute',
    'module_about'
    ]);


mvcApp.config(['$routeProvider',
  function($routeProvider) {
    //console.log($routeProvider)
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutCrtl'
      }).otherwise({
        redirectTo: '/'
      });
  }]);