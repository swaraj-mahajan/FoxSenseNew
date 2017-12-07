require.config({
    baseUrl: "app",    
    paths: {
        'angular': '../assets/js/angular.min',
        'angularAMD': '../assets/js/angularAMD.min',
        'angular-ui-router': '../assets/js/angular-ui-router.min',
        'angular-route': '../assets/js/angular-route.min',
        'LoginController': 'Component/Shared/Controllers/LoginController',
        'app':'app'
        
    },
    // Add angular modules that does not support AMD out of the box, put it 
    shim: { 
    'angularAMD': ['angular'], 
    'angular-ui-router': ['angular'],
    'angular-route': ['angular'],    
    'app':{
        deps:['angular','angularAMD', 'angular-route']
    } 
},
      // kick start application
    deps: ['app']
});