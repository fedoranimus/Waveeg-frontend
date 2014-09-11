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


waveApp.controller("appController", function($scope) {

});

waveApp.controller("menuController", function($scope, $famous) {
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.eventHandler = new EventHandler();

  $scope.menuItems = ["Test1", "Test2"];
  $scope.options = {
    menuScrollView: {
      direction: 0, //change to 1 for vertical scrolling
      paginated: true
    }
  }
});
