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
        $scope.categories=["Videos","Books","Stories","Movies","quotes"];
        
        $scope.submitForm=function(isValid){
          
          if(isValid){
            alert("success! "+isValid);
          }
        };
    }]);
    
app.controller("indexCtrl",['$scope','$interval',function($scope,$interval){

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
        $httpBackend.whenGET('views/signup.html').passThrough();
        var quotes = [{quote:'aint bout how hard you hit',id:1}];

     $httpBackend.whenPOST('/quotes').respond(function(method,url,data,header) {
 
    return [200, quotes, {}];
  });

   
         
    });
    
    
  app.controller("quoteCtrl",['$scope','$stateParams','$http','callApi',function($scope,$stateParam,$http,callApi){
  
    $scope.myquote=$stateParam.id;
    callApi.call( $scope.myquote);
  
  }]);