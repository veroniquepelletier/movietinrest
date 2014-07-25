'use strict';

/**
 * @ngdoc function
 * @name masonryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the masonryApp
 */
angular.module('masonryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
