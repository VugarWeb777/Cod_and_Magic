/* eslint-disable no-console */
"use strict";

(function () {
	var setup = document.querySelector(".setup");
	var userDialog = document.querySelector(".setup-similar");
	userDialog.classList.remove("hidden");

	var similarListElement = document.querySelector(".setup-similar-list");
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

	var successHandler = function (wizard) {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < 4; i++) {
			fragment.appendChild(renderWizard(wizard[window.getRandomIndex(wizard)]));
		}
		similarListElement.appendChild(fragment);
	};

	var errorHandler = function (errorMessage) {
		var node = document.createElement("div");
		node.classList.add("error");

		node.textContent = errorMessage;
		document.body.insertAdjacentElement("afterbegin", node);
	};

	window.backend.load(successHandler,errorHandler);


	/*Отправка формы ajax*/
	var form = document.forms["wizard-form"];


	form.addEventListener("submit",function (evt) {
		window.backend.save(new FormData(form),function () {
			setup.classList.add("hidden");
			console.log("форма успешно отправлена!");
		});
		evt.preventDefault();
	});
})();
