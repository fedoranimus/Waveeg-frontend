'use strict'

var waveApp = angular.module('waveApp', ['famous.angular']);

waveApp.controller("appController", ['$scope', function($scope) {
	$scope.title = "Wave"
}]);

waveApp.controller("menuController", ['$scope', '$famous', function($scope, $famous) {
  


  $scope.menuItems = [{
	  	title: "Self",
	  	subtitle: "Manage Your Ego",
	  	iconUrl: "img/self-icon.svg",
	  	color: "black"
	  },{
	  	title: "Train",
	  	subtitle: "Train Your Brain",
	  	iconUrl: "img/train-icon.svg",
	  	color: "red"
	  },{
	  	title: "Monitor",
	  	subtitle: "Monitor Your Activity",
	  	iconUrl: "img/monitor-icon.svg",
	  	color: "blue"
	  },{
	  	title: "Shop",
	  	subtitle: "Expand Your Mind",
	  	iconUrl: "img/shop-icon.svg",
	  	color: "yellow"
  }];

  $scope.options = {
    menuScrollView: {
      direction: 0, //change to 1 for vertical scrolling
      paginated: true
    }
  }

  var EventHandler = $famous['famous/core/EventHandler'];
  
  $scope.eventHandler = new EventHandler();

}]);