'use strict';

angular.module('myApp.progress', [])

    .service('progressService', function () {
        this.progress = 1;
    })

    .directive('progress', function (progressService) {
        return {
            restrict: 'A',
            link: function ($scope, $elm, $attrs) {
                var progress = parseInt($attrs.progress);
                $elm = $($elm);

                $scope.$watch(function () {
                    return progressService.progress;
                }, update);

                function update() {
                    if (progressService.progress == progress) {
                        $elm.addClass('active');
                        $elm.prev('.bar').addClass('active')
                    } else if (progressService.progress > progress) {
                        $elm.removeClass('active');
                        $elm.addClass('done');
                        $elm.prev('.bar').addClass('active')
                    } else {
                        $elm.removeClass('active');
                        $elm.prev('.bar').removeClass('active')
                    }
                }
            }
        };
    });
