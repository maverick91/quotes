//With this approach, your views and routes aren’t tied down to the site URL. 
//This way, you can change the parts of your site using your routing even if the URL does not change.
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
     
  $stateProvider.state('home.login',{
    
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
  }).state('home.signup',{

    templateUrl:'views/signup.html'
  });
    
}]);

