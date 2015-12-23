'use strict';
(function () {
    angular.module('jolibox2App')
        .controller('QuizController', function ($scope, $state) {
            $scope.submitQuiz = function () {
                $state.go('checkout');
            };
            var option = {
                items: 1,
                loop: false,
                nav: true,
                //navText: ["prev", "next"],
                navText: ['<div class="btn quiz-slide__link--prev">Back</div>', '<div class="btn quiz-slide__link--next">Next</div>'],
                dots: true,
                onChanged: function(event) {
                    console.log(event);
                    if (event.item.index === event.item.count - 1) {
                        $('.quiz-slide__link--submit').css('display', 'inline-block');
                    } else {
                        $('.quiz-slide__link--submit').css('display', 'none');
                    }
                }
            };
            $(".quiz__content__carousel--container").owlCarousel(option);
        });
})();
