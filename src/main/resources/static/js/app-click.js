var appClick = angular.module('appClick', []);

appClick.controller('MainController', function(){

	this.mostrarMensagem = function() {
		alert('Você clicou no botão');
	}
	
});
