var appInput = angular.module('appInput', []);

appInput.controller('MainController', function(){

	this.nome = "Nome Inicial";

	this.mostrarMensagem = function() {
		alert('Seu nome: ' + this.nome);
	}
	
});
