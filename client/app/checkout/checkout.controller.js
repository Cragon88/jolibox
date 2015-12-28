'use strict';
(function() {



angular.module('jolibox2App')
  .controller('CheckoutController', function ($scope, $state, $stateParams) {
        //$scope.$parent.activeMenu =  "reviews";
        $("html, body").scrollTop(0);
        $scope.plans = App.subscribe.plans;
        $scope.answers = $stateParams.answers;

        $scope.findPlan = function (planId) {
            for (var idx = 0; idx < $scope.plans.length; idx++) {
                if ($scope.plans[idx].id == planId) {
                    return $scope.plans[idx];
                }
            }
            return {};
        };

        if ($scope.answers.length === 0) {
            $state.go("quiz-begin", {planId: $stateParams.planId});
        } else {
            $scope.plan = $scope.findPlan($stateParams.planId);
            $scope.plan.id = $stateParams.planId;
        }
    });
})();
