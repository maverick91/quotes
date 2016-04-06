app.controller("appController",['$scope','$http','$state','$rootScope',function($scope,$http,$state,$rootScope){
  // console.log("here");
   var config = {
              'Content-Type':'text/plain'
            };

 $scope.authenticate= function(user) {

$state.go('home');
    };
}]);

app.controller("homeCtrl",[
    '$scope','$http','$state',function($scope,$http,$state){
              
           $scope.myquote="data.quote";
        $scope.categories=["inspirational","love","family","life","war","patriotism"];
        $scope.selectedCategory=function(category) {
         //   alert(category);
         $http.get('/quotes').success(function(data){
        
           $scope.myquote=data.quote;
         });
         
        };           
    }]);
    
app.controller("indexCtrl",['$scope','$interval',function($scope,$interval){
  // var timer = setInterval(function() {
  //   updateTime();
  //     $scope.$apply();
  // }, 1000);
  var updateTime=function(){
   $scope.time=new Date();
  };
  $interval(function(){updateTime();},1000);

    updateTime();
}]);    
    
    // no global variable
    // ng-messages validation
    
    backendMock.run(function($httpBackend){
      $httpBackend.whenGET('views/login.html').passThrough();
      $httpBackend.whenGET('views/home.html').passThrough();
      $httpBackend.whenGET('views/quote.html').passThrough();

     $httpBackend.whenGET("/quotes").respond({ quote:'aint bout how hard you hit' });

      var quotes = {quote:'aint bout how hard you hit'};
         
    });
    
    
  app.controller("quoteCtrl",['$scope','$stateParams',function($scope,$stateParam){
    
    alert($stateParam.id);
  }]);