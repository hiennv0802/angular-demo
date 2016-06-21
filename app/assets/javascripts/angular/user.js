myApp.controller("users_controller", ["$scope", "$http", function($scope, $http) {
	$scope.items = [
		{count: 10},
		{count: 25},
		{count: 50},
		{count: 100}
	];
	$http.get("users")
	.success(function(data) {
		$scope.users = data["datas"]["users"];
		$scope.numbers = data["datas"]["numbers"];
	});

	$scope.getTimes = function(n) {
		var arr = [];
		for (var i = n - 1; i >= 0; i--) {
			arr.push(i);
		}
		return arr;
	}

	$scope.getUser = function(n) {
		url = "users?time=" + n;
		$http.get(url)
		.success(function(data) {
			console.log(data["datas"])
			$scope.users = data["datas"]["user_paginations"]
		});
	}

	$scope.sendLimit = function() {
		var data_send = $scope.limit.count;
		url = "users?data=" + data_send;
		$http.get(url)
		.success(function(data_return) {
			$scope.users = data_return["datas"]["users"]
		});
	}
}]);

// myApp.factory("getUser", function() {
// 	var factory = {};
// 	factory.getData = function() {
// 		$http.get("users")
// 		.success(function(data) {
// 			$scope.users = data
// 		});
// 	}
// });