var waveApp = angular.module("waveApp", []);

waveApp.directive("menuView", function () {
	return {
		restrict: "E",
		scope: {
			title: "=title"
		},
		templateUrl: "partials/menuView.html"
		
	}
});