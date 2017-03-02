var app=angular.module('app',['ngRoute','ngStorage','ngMaterial','ngMessages','ngAnimate','ui.bootstrap']);

app.config(function($routeProvider){
  //set up routes
$routeProvider
.when('/',{
  templateUrl: 'angular/view/home.html',
  controller: 'homecontroller'
})
.otherwise({
  redirectTo: '/'
});
})
.run( function($rootScope, $location,$localStorage,$window,$timeout) {
});


app.controller('homecontroller',function($scope,$http,$localStorage,$timeout){
console.log("i am inside the home controller");
});