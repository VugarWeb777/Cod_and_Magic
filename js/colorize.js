"use strict";

(function () {
	//change wizard custom color
	var coat = document.querySelector(".setup-wizard");
	var fireball = document.querySelector(".setup-fireball-wrap");
	var colorFireBall = ["ee4830","#30a8ee","#5ce6c0","#e848d5","#e6e848"];

	function changeColorFireball(){
		return colorFireBall[Math.round(Math.random()* (colorFireBall.length - 1))];
	}

	coat.querySelector(".wizard-coat").addEventListener("click",function () {
		this.style.fill = window.wizards.getCoatColor();
	});

	coat.querySelector(".wizard-eyes").addEventListener("click",function () {
		this.style.fill = window.wizards.getEyesColor();
	});


	fireball.addEventListener("click",function () {
		var changeColor = this.style.background = changeColorFireball();
		this.querySelector("input[name='fireball-color']").setAttribute("value",changeColor);
	});
})();
