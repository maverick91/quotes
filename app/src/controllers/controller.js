app.controller("appController",['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope){
   console.log("here");
   var config = {
              'Content-Type':'text/plain'
            }

 $scope.authenticate= function(user) {
//         $http.post("http://localhost:8181/",$scope.user,config).then(function(response) {
      
//    });
$rootScope.loggedInUser=$scope.user;
    $location.path("/home");
    }
}]);

app.controller("homeCtrl",[
    '$scope','$http','$location',function($scope,$http,$location){
        
        $scope.categories=["inspirational","love","family","life","war","patriotism"];
        $scope.selectedCategory=function(category) {
            alert(category);
            $location.path("/quote");
        }
    }]);
    
    
    //o global variable
    //ng-messages validation