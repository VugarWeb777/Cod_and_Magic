/* eslint-disable no-console */
"use strict";

(function () {

	var similarWizardTemplete = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

	window.getRandomIndex = function (arr) {
		return Math.floor(Math.random() * arr.length);
	};

	window.renderWizard = function (wizard) {
		var wizardElement = similarWizardTemplete.cloneNode(true);
		wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
		wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
		wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;
		return wizardElement;
	};
})();
