app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');
  $stateProvider.state('login',{
    url:'/login',
    templateUrl:'views/login.html',
    controller:'appController'
  }).state('home',{
    url:'/home',
     templateUrl:'views/home.html',
        controller:'homeCtrl'
  }).state('quote',{
     url:'/quote/{id}',
     templateUrl:'views/quote.html',
     controller:'quoteCtrl'
  });
    
}]);

// '$stateProvider', '$urlRouterProvider',[function('$stateProvider', '$urlRouterProvider') {
//   $urlRouterProvider.otherwise('/login');
//   $stateProvider.state('login',{url:'/login',
//     templateUrl:'views/login.html'
//   });