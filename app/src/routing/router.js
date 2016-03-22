app.config(['$routeProvider',function($routeProvider) {
    console.log("here");
    $routeProvider.when('/login',{
        templateUrl:'views/login.html',
        controller:''
        
    }).when('/home',{
        templateUrl:'views/home.html',
        controller:'homeCtrl'
    }).when('/quote/:categoarg',{
        templateUrl:'views/quote.html'
    }).otherwise({
        redirectTo:'/login'
      
    });
}]).run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser== null) {
        // no logged user, redirect to /login
        if ( next.templateUrl === "views/login.html") {
        } else {
          $location.path("/login");
        }
      }          
    });
  });

//UIrouter
//scalibility and maintainbility issue
//routing!=router
//no back
//refresh all var gone