angular.module('movietinrest')
    .directive('image', function () {
        return function (scope, element, attrs) {
            var img,
                imageUri = 'http://image.tmdb.org/t/p/w500',
                apiKey = '',
                imgTag = (element.prop('tagName') === 'IMG');

            attrs.$observe('image', function (value) {
                window.console.log('value ::%j', value);
                var url;
                if (value) {
                    url = imageUri + value + "?api_key=" + apiKey;
                    img = imgTag ? element : angular.element('<img>');
                    img.bind('load', function () {
                        if (img[0].complete) {
                            if (!imgTag) {
                                element.css('background-image', 'url("' + url + '")');
                            }
                            scope.$emit('imageLoaded', element);
                        }
                    });
                    img.attr('src', url);
                }
                element.attr('draggable', 'false');
                element.attr('unselectable', 'on');
            });
        };
    });