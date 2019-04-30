"use strict";
(function () {
	var similarListElement = document.querySelector(".setup-similar-list");
	var similar = document.querySelector(".setup-similar");
	similar.classList.remove("hidden");

	var successHandler = function (wizard) {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < 4; i++) {
			fragment.appendChild(window.renderWizard(wizard[window.getRandomIndex(wizard)]));
		}
		similarListElement.appendChild(fragment);
	};

	var errorHandler = function (errorMessage) {
		var node = document.createElement("div");
		node.classList.add("error");

		node.textContent = errorMessage;
		document.body.insertAdjacentElement("afterbegin", node);
	};

	window.backend.load(successHandler, errorHandler);
})();
