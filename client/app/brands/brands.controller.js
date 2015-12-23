'use strict';
(function() {



angular.module('jolibox2App')
  .controller('BrandsController', function ($scope, $http) {
        $scope.$parent.activeMenu =  "brands";
        $scope.activeBrands = App.brands.logos;

        $("#brand-search").keyup(function( event ) {
            if ( event.which == 13 ) {
                event.preventDefault();
            }
            $scope.filter($("#brand-search").val());
        });

        $scope.filter = function(keyword) {
            console.log("filter " + keyword);
            $scope.activeBrands = [];
            for (var idx = 0; idx < App.brands.logos.length; idx++) {
                if (App.brands.logos[idx].name.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                    $scope.activeBrands.push(App.brands.logos[idx]);
                }
            }
            $scope.$apply();
        }
    });
})();
