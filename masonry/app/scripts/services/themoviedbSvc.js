
angular.module('movietinrest')
    .service('themoviedbSvc', ['$http', '$q', '$rootScope', 'httpSvc', function ($http, $q, $rootScope, httpSvc) {

        function authentication() {

        }

        function getMovieTopRated() {
        	var defer = $q.defer();
	        httpSvc.get('/movie/top_rated', {}).then(function (results) {
	            defer.resolve(results.results);
	        });
	        return defer.promise;
        }

        return {
        	getMovieTopRated: getMovieTopRated,
            authentication: authentication
        }; 
    }]);