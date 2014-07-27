'use strict';

/**
 * @ngdoc function
 * @name movietinrest.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movietinrest
 */
angular.module('movietinrest')
    .controller('MainCtrl', function ($scope, themoviedbSvc) {
        var nbThumbnails = 20;

        themoviedbSvc.getMovieTopRated().then(function(results) {
            $scope.thumbnails = results;
        });
    });
