var appInput = angular.module('appInput', []);

appInput.controller('MainController', function(){

	$scope.nome = "Nome Inicial";

	$scope.mostrarMensagem = function() {
		alert('Seu nome: ' + this.nome);
	}
	
});
