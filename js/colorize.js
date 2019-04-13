"use strict";

(function () {
	var ChangeWizard = function (wizards) {

		var wizard = document.querySelector(".setup-wizard");
		var wizardCoat = wizard.querySelector(".wizard-coat");
		var wizardEyes = wizard.querySelector(".wizard-eyes");
		var fireball = document.querySelector(".setup-fireball-wrap");


		function ChangeCoatColor() {
			wizardCoat.style.fill = wizards[window.getRandomIndex(wizards)].colorCoat;
		}

		function ChangeEyesColor() {
			wizardEyes.style.fill = wizards[window.getRandomIndex(wizards)].colorEyes;
		}

		function ChangeFireBallColor() {
			fireball.style.background = wizards[window.getRandomIndex(wizards)].colorFireball;
		}


		wizardCoat.addEventListener("click", ChangeCoatColor);
		wizardEyes.addEventListener("click", ChangeEyesColor);
		fireball.addEventListener("click", ChangeFireBallColor);
	};

	window.backend.load(ChangeWizard);

})();
