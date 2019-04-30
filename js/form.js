/* eslint-disable no-console */
"use strict";

(function () {

	var setup = document.querySelector(".setup");
	var form = document.forms["wizard-form"];


	form.addEventListener("submit",function (evt) {
		window.backend.save(new FormData(form),function () {
			setup.classList.add("hidden");
			console.log("форма успешно отправлена!");
		});
		evt.preventDefault();
	});

})();
