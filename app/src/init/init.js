var app = angular.module('app',[
    'ngRoute','ngMessages','ui.router','backendMock'
]);


var backendMock = angular.module('backendMock',['ngMockE2E']);