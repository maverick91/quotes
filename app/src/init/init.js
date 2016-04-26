var app = angular.module('app',[
    'ngRoute','ngMessages','ui.router'
]).service("callApi",function($http){
    this.call = function(categorie){
       var url='http://localhost:3000/inspiration/'+categorie;
     
      $http.get(url).success(function(data){
     
      alert(data);
    });
    };
  }
);

//var backendMock = angular.module('backendMock',['ngMockE2E']);