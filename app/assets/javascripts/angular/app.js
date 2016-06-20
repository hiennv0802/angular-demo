'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute']);
 
myApp.config(['$routeProvider', function($routeProvider) {
 
    $routeProvider.otherwise({redirectTo: '/home'});
 
    $routeProvider.when('/home', {
        templateUrl: '/assets/home.html',
        controller: 'ChapterCtrl'
    });
    
    $routeProvider.when('/projects', {
        templateUrl: '/assets/projects.html'
    });
    
    $routeProvider.when('/services', {
        templateUrl: '/assets/services.html'
    });
    
    $routeProvider.when('/downloads', {
        templateUrl: '/assets/downloads.html'
    });
    
    $routeProvider.when('/about', {
        templateUrl: '/assets/about.html'
    });
    
    $routeProvider.when('/contact', {
        templateUrl: '/assets/contact.html'
    });
}]);

myApp.controller('ChapterCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.sendData = function(){
        var data = JSON.stringify({
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone,
            date: $scope.date,
            city: $scope.city,
            country: $scope.country,
            address: $scope.address,
            intro: $scope.intro
        });
        $http.post("users", data)
        .success(function(data, status) {
            $scope.PostDataResponse = data;
        });
    }
  }]);