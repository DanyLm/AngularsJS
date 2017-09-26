var app = angular.module("gsbRapports",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
            .when('/',{
                templateUrl :'vues/connexion.html',
                controller :'connexionController'
            })
            .when('/home',{
            	templateUrl : 'vues/home.html',
            	controller : 'homeController'
            })
            .when('/rapports',{
            	templateUrl : 'vues/rapports.html',
            	controller : 'rapportsController'
            })
            .when('/medecins',{
            	templateUrl : 'vues/medecins.html',
            	controller : 'medecinsController'
            })
            .otherwise({redirectTo: '/'});
            
});


