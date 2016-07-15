uiRouterApp.controller('searchController', function($scope) {
  $scope.form={search1:"dang search",search2:"search",search3:"",search4:"",};

  $scope.showParams = function(){
    console.log($scope.form);
  }

});
