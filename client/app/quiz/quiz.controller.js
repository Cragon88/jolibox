'use strict';
(function () {
    angular.module('jolibox2App')
        .controller('QuizController', function ($scope, $state, $stateParams) {
            $scope.answer= [];
            $scope.currentIdx = 0;
            $scope.planId = $stateParams.planId;
            $("html, body").scrollTop(0);
            var option = {
                items: 1,
                loop: false,
                nav: true,
                navText: ['<div class="btn quiz-slide__link--prev">Back</div>', '<div class="btn quiz-slide__link--next">Next</div>'],
                dots: true,
                onChanged: function(event) {
                    if (event.item.index != null) {
                        $scope.currentIdx = event.item.index;
                    }
                    if (event.item.index === event.item.count - 1) {
                        $('.quiz-slide__link--submit').css('display', 'inline-block');
                    } else {
                        $('.quiz-slide__link--submit').css('display', 'none');
                    }
                }
            };
            $(".quiz__content__carousel--container").owlCarousel(option);

            $(".quiz-slide__main__item").on("click", function(event) {
                var element = $(event.currentTarget);
                var checkbox = element.find(".quiz-slide__main__item__checkbox");
                console.log($scope.answer[$scope.currentIdx]);
                if (typeof $scope.answer[$scope.currentIdx] === "undefined" ) {
                    $scope.answer[$scope.currentIdx] = [];
                }
                if (checkbox.css('display') === 'none') {
                    $(event.currentTarget).find(".quiz-slide__main__item__checkbox").css('display', 'inline-block');
                    $scope.answer[$scope.currentIdx].push(element.attr('id'));
                } else {
                    $(event.currentTarget).find(".quiz-slide__main__item__checkbox").css('display', 'none');
                    $scope.answer[$scope.currentIdx].splice($scope.answer[$scope.currentIdx].indexOf(element.attr('id')), 1);
                }

                $scope.$apply();
            });

            $scope.submitQuiz = function () {
                $state.go('checkout', {planId: $scope.planId, answers:  $scope.answer});
            };

            $scope.startQuiz = function () {
                $state.go('quiz', {planId: $scope.planId});
            };
        });
})();
