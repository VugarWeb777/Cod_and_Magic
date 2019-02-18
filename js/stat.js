"use strict";

const CLOUD_WEIGHT = 420;
const CLOUD_HEIGHT = 270;


const renderCloud = function (ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WEIGHT, CLOUD_HEIGHT);
};

const getMaxElements = function (arr) {
	let maxElement = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
	renderCloud(ctx, 110, 20, "rgba(0,0,0,0.7)");
	renderCloud(ctx, 100, 10, "#fff");

	const histogramHeight = 150;
	const columnWidth = 40;
	const columnIndent = 50;
	const lineHeight = 20;
	const initialX = 150;
	const initialY = 245;
	const maxTime = getMaxElements(times);

	const getPlayerColor = function (playerName) {
		if (playerName === "Вы") {
			return "rgba(255,0,0,1)";
		} else {
			return "rgba(0,0,255, " + (Math.random() + 0.1).toFixed(1) + ")";
		}
	};

	ctx.font = "PT Mono 16px";
	ctx.fillStyle = "#000";
	ctx.fillText("Ура вы победили!\n", initialX, 40);
	ctx.fillText("Список результатов:", initialX, 60);


	for (let i = 0; i < names.length; i++) {
		const playerTime = Math.round(times[i]);
		const columnHeight = (histogramHeight * playerTime) / maxTime;

		ctx.fillStyle = getPlayerColor(names[i]);
		ctx.fillRect(initialX + i * columnIndent, initialY, columnWidth, columnHeight * (-1));

		ctx.fillStyle = "#000";
		ctx.fillText(playerTime.toString(), initialX + i * columnIndent, initialY - columnHeight - lineHeight / 2);
		ctx.fillText(names[i], initialX + i * columnIndent, initialY + lineHeight, columnWidth);
	}
};
