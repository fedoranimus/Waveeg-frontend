'use strict'

var waveApp = angular.module('waveApp', ['ngAnimate', 'ngCookies','ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'famous.angular']);

waveApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'appController'
      });

    $urlRouterProvider.otherwise('/');
});
