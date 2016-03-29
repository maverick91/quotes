app.config(['$routeProvider','$stateProvider', '$urlRouterProvider',function($routeProvider,$stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');
  $stateProvider.state('login',{url:'/login',
    templateUrl:'views/login.html'
  });
    $routeProvider.when('/home',{
        templateUrl:'views/home.html',
        controller:'homeCtrl'
    }).when('/quote/:categoarg',{
        templateUrl:'views/quote.html'
    });
}]).run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser===null) {
        // no logged user, redirect to /login
        if ( next.templateUrl === "views/login.html") {
        } else {
          $location.path("/login");
        }
      }          
    });
  });

// '$stateProvider', '$urlRouterProvider',[function('$stateProvider', '$urlRouterProvider') {
//   $urlRouterProvider.otherwise('/login');
//   $stateProvider.state('login',{url:'/login',
//     templateUrl:'views/login.html'
//   });