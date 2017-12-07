define(
[
    'angularAMD', 
    'angular-ui-router',
    'angular-route'
], 
function (angularAMD) 
{
    "use strict"; 
    var app = angular.module("app", [
        // 'ui-router', 
        'ngRoute'
    ]);
    app.config(function ($routeProvider) {
        $routeProvider.when(
            "/login",
            angularAMD.route({
                templateUrl: 'Component/Shared/Views/login.html',
                controller: 'LoginController'
               
            })
        );
    });
 
    // $stateProvider
    // .state(
    //         "login",
    //         angularAMD.route({
    //             url:"/login",
    //             templateUrl: "views/login.html",
    //             controller: 'LoginController',
    //             controllerUrl: "Controller/homeController",
    //         })
    //     );
    // });
    return angularAMD.bootstrap(app);
});