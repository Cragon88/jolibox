'use strict';

angular.module('jolibox2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        views: {
          "main" : {
            templateUrl: 'app/main/main.html',
            controller: 'MainController'
          }
        }
      })
      .state('subscribe', {
        url: '/subscribe',
        views: {
          "main" : {
            templateUrl: 'app/subscribe/subscribe.html',
            controller: 'SubscribeController'
          }
        }
      })
    ;

    $locationProvider.html5Mode(true);
  })
  .controller('AppController', function ($rootScope, $scope) {
    //$rootScope.App = App;
    //$scope.pageTitle = App.pageTitle.home;

    $scope.isActive = function(menu) {
      return $scope.activeMenu === menu;
    };
  });
