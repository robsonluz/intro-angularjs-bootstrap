var appSoma = angular.module('appSoma', []);

appSoma.controller('CalculadoraController', function($scope){

	$scope.resultado = 0;
	$scope.numero1 = "";
	$scope.numero2 = "";

	$scope.somar = function() {
		$scope.resultado = parseInt($scope.numero1) + parseInt($scope.numero2);
	}
	
});
