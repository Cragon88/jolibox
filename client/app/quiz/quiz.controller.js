'use strict';
(function() {



angular.module('jolibox2App')
  .controller('QuizController', function ($scope) {
      var option = {
        items:1,
        loop: false,
        nav: true,
        //navText: ["prev", "next"],
        navText: ['<div class="btn quiz-slide__link--prev">Back</div>', '<div class="btn quiz-slide__link--next">Next</div>'],
        dots: true
      };
      $(".quiz__content__carousel--container").owlCarousel(option);

    });
})();
