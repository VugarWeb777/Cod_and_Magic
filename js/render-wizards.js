/* eslint-disable no-console */
"use strict";

(function () {

	var similarWizardTemplete = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");
	window.getRandomIndex = function (arr) {
		return Math.floor(Math.random() * arr.length);
	};

	var renderWizard = function (wizard) {
		var wizardElement = similarWizardTemplete.cloneNode(true);
		wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
		wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
		wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;
		return wizardElement;
	};

	var similarList = document.querySelector(".setup-similar-list");
	var similar = document.querySelector(".setup-similar");


	window.render = function (data) {
		var takeNumber = data.length > 4 ? 4 : data.length;
		similarList.innerHTML = "";
		for (var i = 0; i < takeNumber; i++) {
			similarList.appendChild(renderWizard(data[i]));
		}

		similar.classList.remove("hidden");
	};
})();
