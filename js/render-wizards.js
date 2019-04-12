/* eslint-disable no-console */
"use strict";

(function () {
	var userDialog =  document.querySelector(".setup-similar");
	userDialog.classList.remove("hidden");

	var similarListElement = document.querySelector(".setup-similar-list");
	var similarWizardTemplete = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

	function createWizards () {
		for (var i = 0; i <4; i++) {
			var wizardObj = new window.wizards.obj(window.wizards.getName(),window.wizards.getCoatColor(),window.wizards.getEyesColor());
			window.wizards.wizardsList.push(wizardObj);
		}
		return window.wizards.wizardsList;
	}

	createWizards();


	var renderWizard = function (wizard) {
		var wizardElement = similarWizardTemplete.cloneNode(true);
		wizardElement.querySelector(".setup-similar-label").textContent = wizard.wizardName;
		wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
		wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
		return wizardElement;
	};

	function append() {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < window.wizards.wizardsList.length; i++) {
			fragment.appendChild(renderWizard(window.wizards.wizardsList[i]));
		}
		similarListElement.appendChild(fragment);
	}

	append();


	/*Отправка формы ajax*/
	/*var form = document.forms["wizard-form"];

	form.addEventListener("submit",function (evt) {
		window.upload(new FormData(form),function () {
			userDialog.classList.add("hidden");
		});
		evt.preventDefault();
	});*/
})();
