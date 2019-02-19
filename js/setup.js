/* eslint-disable no-console,no-unused-vars */
"use strict";

var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplete = document.querySelector("#similar-wizard-template")
	.content
	.querySelector(".setup-similar-item");


var firstName = ["Иван","Хуан Себастьян","Мария","Кристоф","Виктор","Юлия","Люпита","Вашингтон"];
var surnName = ["Де марья","Верон","Мирабелла","Вальц","Онопко","Топольницкая","Нионго","Ирвинг"];
var coatColor = ["rgb(101,137,164)","rgb(241,43,107)","rgb(146,100,161)","rgb(56,159,117)","rgb(215,210,55)","rgb(0,0,0)","rgb(255,0,0)"];
var eyesColor = ["black","red","blue","yellow","green"];

class Wizards {
	constructor (wizardName,coatColor,eyesColor){
		this.wizardName = wizardName;
		this.coatColor = coatColor;
		this.eyesColor = eyesColor;
	}
}


function getName (){
	return firstName[Math.round(Math.random() * (firstName.length - 1))] + " " + surnName[Math.round(Math.random() * (surnName.length - 1))];
}
function getCoatColor () {
	return coatColor[Math.round(Math.random() * (coatColor.length - 1))];
}

function getEyesColor () {
	return eyesColor[Math.round(Math.random() * eyesColor.length - 1)];
}

var wizards = [];

function createWizards () {
	for (var i = 0; i <4; i++) {
		var wizardObj = new Wizards(getName(),getCoatColor(),getEyesColor());
		wizards.push(wizardObj);
	}
	return wizards;
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
	for (var i = 0; i < wizards.length; i++) {
		fragment.appendChild(renderWizard(wizards[i]));
	}
	similarListElement.appendChild(fragment);
}
append();
