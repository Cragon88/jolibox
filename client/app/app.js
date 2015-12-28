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
        .state('brands', {
          url: '/brands',
          views: {
            "main" : {
              templateUrl: 'app/brands/brands.html',
              controller: 'BrandsController'
            }
          }
        })
        .state('brand-detail', {
          url: '/brand-detail',
          views: {
            "main" : {
              templateUrl: 'app/brands/brand-detail.html',
              controller: 'BrandDetailController'
            }
          }
        })
        .state('videos', {
          url: '/tutorials',
          views: {
            "main" : {
              templateUrl: 'app/videos/videos.html',
              controller: 'VideosController'
            }
          }
        })
        .state('reviews', {
          url: '/reviews',
          views: {
            "main" : {
              templateUrl: 'app/reviews/reviews.html',
              controller: 'ReviewsController'
            }
          }
        })
        .state('quiz-begin', {
          url: '/quiz-begin/:planId',
          views: {
            "main" : {
              templateUrl: 'app/quiz/quiz-home.html',
              controller: 'QuizController'
            }
          }
        })
        .state('quiz', {
          url: '/quiz/:planId',
          views: {
            "main" : {
              templateUrl: 'app/quiz/quiz.html',
              controller: 'QuizController'
            }
          }
        })
        .state('checkout', {
          url: '/checkout/:planId',
          views: {
            "main" : {
              templateUrl: 'app/checkout/checkout.html',
              controller: 'CheckoutController'
            }
          },
          params: {answers: []}
        })
    ;

    $locationProvider.html5Mode(true);
  })
  .controller('AppController', function ($rootScope, $scope) {
    $rootScope.App = App;
    $rootScope.Quiz = Quiz;
    $scope.activeMenu = "home";
    //$scope.pageTitle = App.pageTitle.home;

    $scope.isActive = function(menu) {
      return $scope.activeMenu === menu;
    };
  });
