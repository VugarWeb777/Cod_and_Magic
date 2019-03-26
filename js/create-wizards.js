"use strict";

(function () {
	function createWizards () {
		for (var i = 0; i <4; i++) {
			var wizardObj = new window.wizards.obj(window.wizards.getName(),window.wizards.getCoatColor(),window.wizards.getEyesColor());
			window.wizards.wizardsList.push(wizardObj);
		}
		return window.wizards.wizardsList;
	}

	createWizards();
})();
