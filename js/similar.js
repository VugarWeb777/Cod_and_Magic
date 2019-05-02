/* eslint-disable no-console */
"use strict";
(function () {
	var setupWizard = document.querySelector(".setup-wizard");
	var wizardCoat = setupWizard.querySelector(".wizard-coat");
	var wizardEyes = setupWizard.querySelector(".wizard-eyes");
	var fireball = document.querySelector(".setup-fireball-wrap");

	var wizards = [];
	var coatColor;
	var eyesColor;
	var fireballColor;

	function ChangeCoatColor() {
		coatColor = wizards[window.getRandomIndex(wizards)].colorCoat;
		wizardCoat.style.fill = coatColor;
		window.debounce(updateWizards);
	}

	function ChangeEyesColor() {
		eyesColor = wizards[window.getRandomIndex(wizards)].colorEyes;
		wizardEyes.style.fill = eyesColor;
		window.debounce(updateWizards);
	}

	function ChangeFireBallColor() {
		fireballColor = wizards[window.getRandomIndex(wizards)].colorFireball;
		fireball.style.background = fireballColor;
	}


	wizardCoat.addEventListener("click", ChangeCoatColor);
	wizardEyes.addEventListener("click", ChangeEyesColor);
	fireball.addEventListener("click", ChangeFireBallColor);


	var getRank = function (wizard) {
		var rank = 0;
		if (wizard.colorCoat === coatColor) {
			rank += 2;
		}
		if (wizard.colorEyes === eyesColor) {
			rank += 1;
		}
		return rank;
	};

	var namesComparator = function (left, right) {
		if (left > right) {
			return 1;
		} else if (left < right) {
			return -1;
		} else {
			return 0;
		}
	};

	var updateWizards = function () {
		window.render(wizards.sort(function (left, right) {
			var rankDiff = getRank(right) - getRank(left);
			if (rankDiff === 0) {
				rankDiff = namesComparator(left.name, right.name);
			}
			return rankDiff;
		}));
	};

	var successHandler = function (data) {
		wizards = data;
		window.debounce(updateWizards);
	};

	var errorHandler = function (errorMessage) {
		var node = document.createElement("div");
		node.classList.add("error");

		node.textContent = errorMessage;
		document.body.insertAdjacentElement("afterbegin", node);
	};

	window.backend.load(successHandler, errorHandler);
})();
