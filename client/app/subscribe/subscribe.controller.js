'use strict';
(function() {



angular.module('jolibox2App')
  .controller('SubscribeController', function ($scope, $http) {
        $scope.$parent.activeMenu =  "subscribe";
        $scope.scrollToTop = function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        };
        $("html, body").scrollTop(0);
    });
})();
