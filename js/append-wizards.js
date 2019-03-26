"use strict";

(function () {
	function append() {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < window.wizards.wizardsList.length; i++) {
			fragment.appendChild(window.renderWizard(window.wizards.wizardsList[i]));
		}
		window.similarListElement.appendChild(fragment);
	}
	append();
})();
