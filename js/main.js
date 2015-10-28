require.config({
    baseUrl: '',
    urlArgs: 'v=1.0'
});

require(
    [
        'js/app/app',
        'js/services/routeResolver'
    ],
    function () {
        angular.bootstrap(document, ['webApp']);
    });