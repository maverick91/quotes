var app = angular.module('app',[
    'ngRoute','ngMessages','ui.router','backendMock'
]).service("callApi",function($http){
    this.call = function(data){
      
      $http.post('/quotes',"somedata").success(function(data){
     
      alert(data.toString());
    });
    };
  }
);

var backendMock = angular.module('backendMock',['ngMockE2E']);