app.config(['$routeProvider',function($routeProvider) {
    console.log("here");
    $routeProvider.when('/home',{
        templateUrl:'views/login.html',
        controller:''
        
    }).otherwise({
        redirectTo:'/home'
      
    });
}]);


//routing!=router