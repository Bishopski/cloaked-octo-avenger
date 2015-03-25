'use strict';

/**
 * @ngdoc overview
 * @name cloakedOctoAvengerApp
 * @description
 * # cloakedOctoAvengerApp
 *
 * Main module of the application
 */
angular
  .module('cloakedOctoAvengerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
