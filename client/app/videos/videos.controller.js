'use strict';
(function() {



angular.module('jolibox2App')
  .controller('VideosController', function ($scope, $http) {
        $scope.$parent.activeMenu =  "videos";
        $scope.activeVideos = App.videos.items;
        $("html, body").scrollTop(0);

        $("#video-search").keyup(function( event ) {
            if ( event.which == 13 ) {
                event.preventDefault();
            }
            $scope.filter($("#video-search").val());
        });

        $scope.filter = function(keyword) {
            console.log("filter " + keyword);
            $scope.activeVideos = [];
            for (var idx = 0; idx < App.videos.items.length; idx++) {
                if (App.videos.items[idx].name.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                    $scope.activeVideos.push(App.videos.items[idx]);
                }
            }
            $scope.$apply();
        }
    });
})();
