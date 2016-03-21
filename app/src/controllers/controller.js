app.controller("appController",['$scope','$http',function($scope,$http){
   console.log("here");
  
 $scope.authenticate= function(user) {
        $http.get("http://localhost:8181/").then(function(response) {
       alert("hola");
   });
    }
}]);

