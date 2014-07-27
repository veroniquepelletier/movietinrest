angular.module('movietinrest')
    .factory('httpSvc', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        var http = {
                get: doHttp('GET', 'params'),
                post: doHttp('POST', 'data'),
                put: doHttp('PUT', 'data'),
                del: doHttp('DELETE'),
                apiKey: '',
                baseUri: 'http://api.themoviedb.org/3',
                token: '',
                timeout: 5000,
                setAuthToken: function (_authToken) {
                    authToken = _authToken;
                },
                hasAuthorization: function () {
                    return authToken !== undefined;
                }
            },
            authToken;

            function doHttp(method, optionsEncoding) {
                return function (endpoint, injectAuthToken, options, canceler) {
                    var deferred = $q.defer(),
                        httpConfig = {
                            method: method,
                            url: http.baseUri + endpoint + "?api_key=" + http.apiKey
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
                        window.console.log('res ::%j', res);
                        if (res.status === 200) {
                            deferred.resolve(res.data);
                        } else {
                            deferred.reject(res.status);
                        }
                    }, function (res) {
                        deferred.reject(res.error);
                    });

                    return deferred.promise;

                }
            }

            return http;
        }]);