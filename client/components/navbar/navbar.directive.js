'use strict';

angular.module('jolibox2App')
  .directive('navbar', function () {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl',
      link: function (scope, element) {
        element.addClass('nav-bar').addClass('nav-bar--fixed');
      }
    };
  });
