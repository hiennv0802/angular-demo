myApp.controller("users_controller", ["$scope", "$http", function($scope, $http) {
	$scope.items = [
		{count: 10},
		{count: 25},
		{count: 50},
		{count: 100}
	];
	$http.get("users")
	.success(function(data) {
		$scope.users = data
	});

	$scope.sendLimit = function() {
		var data_send = $scope.limit.count;
		url = "users?data=" + data_send;
		$http.get(url)
		.success(function(data_return) {
			$scope.users = data_return
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