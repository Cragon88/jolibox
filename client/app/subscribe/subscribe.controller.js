'use strict';
(function() {



angular.module('jolibox2App')
  .controller('SubscribeController', function ($scope, $http, $state) {
        $scope.$parent.activeMenu =  "subscribe";
        $scope.scrollToTop = function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        };
        $("html, body").scrollTop(0);

        $scope.choosePlan = function(planId) {
            $state.go("quiz-begin", {planId: planId})
        }
    });
})();
