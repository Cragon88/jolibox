'use strict';
(function() {



angular.module('jolibox2App')
  .controller('MainController', function ($scope, $http) {
      //var self = this;
      //this.awesomeThings = [];
      //
      //$http.get('/api/things').then(function(response) {
      //  self.awesomeThings = response.data;
      //});
      $scope.$parent.activeMenu = "home";
      $("html, body").scrollTop(0);
      var option1 = {
        items:5,
        smartSpeed: 800,
        margin: 20,
        loop: true,
        nav: true,
        //navText: ["prev", "next"],
        navText: ['<a class="prev main__favorites__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-left"></span></a>', '<a class="next main__favorites__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>'],
        dots: false
      };
      $(".main__favorites__carousel--container").owlCarousel(option1);

      var option2 = {
        items:1,
        smartSpeed: 500,
        margin: 20,
        loop: true,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:3000,
        animateOut: 'slideOutDown'
        //animateIn: 'flipInX'
      };
      $(".main__brands__carousel--container").owlCarousel(option2);
    });

})();
