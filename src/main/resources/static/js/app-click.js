var appClick = angular.module('appClick', []);

appClick.controller('MainController', function(){

	$scope.mostrarMensagem = function() {
		alert('Você clicou no botão');
	}
	
});
