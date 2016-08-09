var appSoma = angular.module('appSoma', []);

appSoma.controller('CalculadoraController', function(){

	this.resultado = 0;
	this.numero1 = "";
	this.numero2 = "";

	this.somar = function() {
		this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
	}
	
});
