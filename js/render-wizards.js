"use strict";

(function () {
	document.querySelector(".setup-similar").classList.remove("hidden");
	window.similarListElement = document.querySelector(".setup-similar-list");
	window.similarWizardTemplete = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

	window.renderWizard = function (wizard) {
		var wizardElement = window.similarWizardTemplete.cloneNode(true);
		wizardElement.querySelector(".setup-similar-label").textContent = wizard.wizardName;
		wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
		wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
		return wizardElement;
	};
})();
