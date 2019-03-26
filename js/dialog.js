/* eslint-disable semi,no-console */

"use strict";

(function () {
	//drag and drop
	var setupDialogElement = document.querySelector(".setup");
	var dialogHandle = document.querySelector(".upload");

	dialogHandle.addEventListener("mousedown", function (evt) {
		evt.preventDefault();

		var startCoords = {
			x: evt.clientX,
			y: evt.clientY
		};

		var dragged = false;

		function onMouseMove(moveEvt) {
			moveEvt.preventDefault();
			dragged = true;

			var shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY
			};
			setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + "px";
			setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + "px";
		}

		function onMouseUp(upEvt) {
			upEvt.preventDefault();

			if (dragged) {
				var onClickPreventDefault = function(evt) {
					evt.preventDefault();
					dialogHandle.removeEventListener("click",onClickPreventDefault);
				};
				dialogHandle.addEventListener("click",onClickPreventDefault);
			}

			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		}

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
	});
})();
