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
        templateUrl: '/assets/services.html',
        controller: 'users_controller'
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


var uiRouterApp = angular.module('uiRouterApp', ['ui.router']);

uiRouterApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      url: '/home',
      views: {
        "view1": {
          templateUrl: '/assets/about.html'
        },
        "view2": {
          templateUrl: '/assets/contact.html'
        },
        "view3": {
          templateUrl: '/assets/downloads.html'
        },
        "view4": {
          templateUrl: '/assets/home.html'
        }
      },
    });

    $stateProvider.state('search1', {
      url: '/search1',
      views: {
        "view1": {
          templateUrl: '/assets/search/search1.html',
          // controller: 'searchController'
        }
      },
    });

    $stateProvider.state('search2', {
      url: '/search2',
      views: {
        "view2": {
          templateUrl: '/assets/search/search2.html',
          // controller: 'searchController'
        }
      },
    });

    $stateProvider.state('search3', {
      url: '/search3',
      views: {
        "view3": {
          templateUrl: '/assets/search/search3.html',
          // controller: 'searchController'
        }
      },
    });

    $stateProvider.state('search4', {
      url: '/search4',
      views: {
        "view4": {
          templateUrl: '/assets/search/search4.html',
          // controller: 'searchController'
        }
      },
    });

    $stateProvider.state('contact', {
      url: '/contact',
      views: {
        "view1": {
          templateUrl: '/assets/downloads.html'
        },
        "view2": {
          templateUrl: '/assets/home.html'
        },
        "view3": {
          templateUrl: '/assets/projects.html'
        },
        "view4": {
          templateUrl: '/assets/services.html'
        }
      },
    });

}]);
