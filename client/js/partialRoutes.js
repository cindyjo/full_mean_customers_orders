var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        // templateUrl: '/partials/customers.html'
        // controller: "MainController",
        // controllerAs: "main"
    })
    .when('/orders', {
    	templateUrl: '/partials/orders.html'
    })
    .when('/customers',{
    	templateUrl: 'partials/customers.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});