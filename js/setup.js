/* eslint-disable no-console,no-unused-vars */
"use strict";

(function () {
	//Модальное окно настройки персонажа

	var BtnOpenSetup = document.querySelector(".setup-open");
	var setupElement = document.querySelector(".setup");
	var BtnCloseSetup = document.querySelector(".setup-close");
	const ESC = 27;
	const ENTER = 13;

	function EscClose(evt) {
		if (evt.keyCode === ESC && !document.activeElement.classList.contains("setup-user-name")) {
			setupElement.classList.add("hidden");
		}
	}


	//Open WizardSetupPopup
	function ShowUserSetup() {
		setupElement.classList.toggle("hidden");
		document.addEventListener("keydown", EscClose);
	}

	BtnOpenSetup.addEventListener("click", ShowUserSetup);

	BtnOpenSetup.addEventListener("keydown", function (evt) {
		if (evt.keyCode === ENTER) {
			ShowUserSetup();
		}
	});

	//Close WizardSetupPopup
	function CloseSetup() {
		if (!setupElement.classList.contains("hidden")) {
			setupElement.classList.add("hidden");
		}
		document.removeEventListener("keydown", EscClose);
	}

	BtnCloseSetup.addEventListener("click", CloseSetup);

	BtnCloseSetup.addEventListener("keydown", function (evt) {
		if (evt.keyCode === ENTER) {
			CloseSetup();
		}
	});
})();





