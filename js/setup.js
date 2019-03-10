/* eslint-disable no-console,no-unused-vars */
"use strict";

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplete = document.querySelector("#similar-wizard-template")
	.content
	.querySelector(".setup-similar-item");


var firstName = ["Иван","Хуан Себастьян","Мария","Кристоф","Виктор","Юлия","Люпита","Вашингтон"];
var surnName = ["Де марья","Верон","Мирабелла","Вальц","Онопко","Топольницкая","Нионго","Ирвинг"];
var coatColor = ["rgb(101,137,164)","rgb(241,43,107)","rgb(146,100,161)","rgb(56,159,117)","rgb(215,210,55)","rgb(0,0,0)","rgb(255,0,0)"];
var eyesColor = ["black","red","blue","yellow","green","gray","brown","pink"];

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


//Модальное окно настройки персонажа

var OpenSetup = document.querySelector(".setup-open");
var userSetup =document.querySelector(".setup");
var btnCloseSetup = document.querySelector(".setup-close");
const ESC = 27;
const ENTER = 13;




function EscClose(evt) {
	if (evt.keyCode === ESC && !document.activeElement.classList.contains("setup-user-name")){
		userSetup.classList.add("hidden");
	}
}

function ShowUserSetup() {
	userSetup.classList.toggle("hidden");
	document.addEventListener("keydown",EscClose);
}

function CloseSetup (){
	if (!userSetup.classList.contains("hidden")){
		userSetup.classList.add("hidden");
	}
	document.removeEventListener("keydown",EscClose);
}

OpenSetup.addEventListener("click",ShowUserSetup);

OpenSetup.addEventListener("keydown",function (evt) {
	if (evt.keyCode === ENTER) {
		ShowUserSetup();
	}
});

btnCloseSetup.addEventListener("click",CloseSetup);

btnCloseSetup.addEventListener("keydown",function (evt) {
	if (evt.keyCode === ENTER) {
		CloseSetup();
	}
});

var coat = document.querySelector(".setup-wizard");
var fireball = document.querySelector(".setup-fireball-wrap");
var colorFireBall = ["ee4830","#30a8ee","#5ce6c0","#e848d5","#e6e848"];

function changeColorFireball(){
	return colorFireBall[Math.round(Math.random()* (colorFireBall.length - 1))];
}

coat.querySelector(".wizard-coat").addEventListener("click",function () {
	this.style.fill = getCoatColor();
});

coat.querySelector(".wizard-eyes").addEventListener("click",function () {
	this.style.fill = getEyesColor();
});


fireball.addEventListener("click",function () {
	var changeColor = this.style.background = changeColorFireball();
	this.querySelector("input[name='fireball-color']").setAttribute("value",changeColor);
});


