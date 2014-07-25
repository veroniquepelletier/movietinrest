'use strict';

/**
 * @ngdoc function
 * @name masonryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the masonryApp
 */
angular.module('masonryApp')
    .controller('MainCtrl', function ($scope) {
        var nbThumbnails = 20,
            randSize = [],
            randText = [];

        randText[1] = 'All the leaves are brown, and its a sad day. I wish it was summer again. I will need to wait a long long time. Or I could go to California to have super nice weather';
        randText[2] = 'And the sky is grey';
        randText[3] = 'Ive been for a walk';
        randText[4] = 'On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day, On a winters day';
        randText[5] = 'Id be safe and warm';
        randText[6] = 'If I was in L.A. it would be nice weather and I would be super rich.';
        randText[7] = 'California dreaming, On such a winters day';

        randSize[1] = 'thumbnail-small';
        randSize[2] = 'thumbnail-large';

        $scope.thumbnails = [];

        for (var i = 0; i <= nbThumbnails; i += 1) {

            $scope.thumbnails.push({
                text: randText[Math.floor((Math.random() * 7) + 1)],
                thumbnailSize: randSize[Math.floor((Math.random() * 2) + 1)],
                img: 'kitten.jpg',
            });

        }
    });
