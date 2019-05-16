/* eslint-disable no-console */
"use strict";

(function () {
	var fileChooser = document.querySelector("input[name=avatar]");
	var preview = document.querySelector(".setup-user-pic");
	var FileTypes = ["gif","jpeg","jpg","png"];

	fileChooser.addEventListener("change",function () {
		var file = fileChooser.files[0];
		var fileName = file.name.toLowerCase();

		var matches = FileTypes.some(function (it) {
			return fileName.endsWith(it);
		});

		if (matches) {
			var reader = new FileReader();
			reader.addEventListener("load",function () {
				preview.src = reader.result;
			});
			reader.readAsDataURL(file);
		}
	});
})();