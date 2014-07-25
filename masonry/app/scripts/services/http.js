angular.module('masonryApp')
    .factory('themoviedbSvc', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        var http = {
            get: doHttp('GET', 'params'),
            post: doHttp('POST', 'data'),
            put: doHttp('PUT', 'data'),
            del: doHttp('DELETE'),
            urlAPI: '',
            setAuthToken: function (_authToken) {
                authToken = _authToken;
            },
            hasAuthorization: function () {
                return authToken !== undefined;
            }



            function doHttp(method, optionsEncoding) {
                return function (injectAuthToken, options) {
                    var deferred = $q.defer(),
                        httpConfig = {
                            method: method,
                            url: urlAPI
                        };

                    if (injectAuthToken) {
                        if (typeof(injectAuthToken) === 'object') {
                            options = injectAuthToken;
                        } else {
                            if (!authToken) {
                                console.warn("We don't have a valid authToken yet!!");
                            }

                            options = options || {};
                            if (method === 'DELETE') {
                                httpConfig.headers = {
                                    'X-something-Auth-Token': authToken
                                };
                            } else {
                                options.authToken = authToken;
                            }
                        }
                    }
                    httpConfig[optionsEncoding] = options;

                    $http(httpConfig).then(function (res) {
                        if (res.data.status === 'success') {
                            deferred.resolve(res.data.results);
                        } else {
                            handlePurpleError(res.data.error);
                            deferred.reject(res.data.error);
                        }
                    }, function (res) {
                        handlePurpleError(res.error);
                        deferred.reject(res.error);
                    });

                    return deferred.promise;

                }
            }

            return http;
        }]