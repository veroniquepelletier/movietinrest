
angular.module('masonryApp')
    .service('themoviedbSvc', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        var token = undefined;

        function authentication() {

        }

        return {
            authentication: authentication
        }; 
    }]);