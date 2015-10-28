'use strict';

define(['js/services/routeResolver'], function() {

    var app = angular.module('webApp', ['ngRoute','routeResolverServices']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
        '$compileProvider', '$filterProvider', '$provide', '$httpProvider',

        function($routeProvider, routeResolverProvider, $controllerProvider,
            $compileProvider, $filterProvider, $provide, $httpProvider) {

            //Change default views and controllers directory using the following:
            //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $routeProvider
                .when('/docs', route.resolve('Docs', 'docs/','vm'))
                .when('/chat', route.resolve('Chat', 'chat/','vm'))
                .when('/circle', route.resolve('Circle', 'circle/','vm'))
                .otherwise({
                    redirectTo: '/chat'
                });

        }
    ]);

    app.run(['$rootScope', '$location',
        function($rootScope, $location) {

            //Client-side security. Server-side framework MUST add it's 
            //own security as well since client-based security is easily hacked
            $rootScope.$on("$routeChangeStart", function(event, next, current) {
                // if (next && next.$$route && next.$$route.secure) {
                //     if (!authService.user.isAuthenticated) {
                //         $rootScope.$evalAsync(function() {
                //             // authService.redirectToLogin();
                //         });
                //     }
                // }
            });

        }
    ]);

    return app;

});
