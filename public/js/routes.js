app = angular.module ("myApp", ['ngRoute','chart.js']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "metrics.html",
        controller : 'metricController'
    });   
});