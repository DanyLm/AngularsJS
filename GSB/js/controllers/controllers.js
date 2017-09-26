app.controller('connexionController',function($scope, $location){

	$scope.lblLogin = "Login";
	$scope.lblMdp = "Mot de passe";
	$scope.lblSubmit = "Connexion";
	$scope.msgErreur = false;

	$scope.valider = function(){
		if($scope.login == "test" || $scope.mdp == "test" ){
			$scope.msgErreur=false;
			$location.url('/home');
		}else{
			$scope.msgErreur = true;
			$scope.lblMsgErreur = "Erreur de login ou mot de passe"
		}
	}
});


app.controller('homeController',function($scope){

});

app.controller('rapportsController',function($scope){
	$scope.title = "Rapport des médecins";
});

app.controller('medecinsController',function($scope){
	$scope.title = "Gestion des médecins";
});

