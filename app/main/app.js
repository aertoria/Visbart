'use strict';


/* App Module */
var mvcApp = angular.module('mvcApp', [
    'ngRoute',
    'module_about',
    'module_estimatetime'
    ]);


mvcApp.config(['$routeProvider',
  function($routeProvider) {
    //console.log($routeProvider)
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutCrtl'
      })
      .when('/estimatetime', {
        templateUrl: 'estimatetime/estimatetime.html',
        controller: 'estimatetimeCrtl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);