"use strict";

(function () {
	window.wizards = {
		wizardsList: [],
		getName: function getName (){
			var firstName = ["Иван","Хуан Себастьян","Мария","Кристоф","Виктор","Юлия","Люпита","Вашингтон"];
			var surnName = ["Де марья","Верон","Мирабелла","Вальц","Онопко","Топольницкая","Нионго","Ирвинг"];
			return firstName[Math.round(Math.random() * (firstName.length - 1))] + " " + surnName[Math.round(Math.random() * (surnName.length - 1))];
		},
		getCoatColor: function getCoatColor () {
			var coatColor = ["rgb(101,137,164)","rgb(241,43,107)","rgb(146,100,161)","rgb(56,159,117)","rgb(215,210,55)","rgb(0,0,0)","rgb(255,0,0)"];
			return coatColor[Math.round(Math.random() * (coatColor.length - 1))];
		},
		getEyesColor: function getEyesColor () {
			var eyesColor = ["black","red","blue","yellow","green","gray","brown","pink"];
			return eyesColor[Math.round(Math.random() * eyesColor.length - 1)];
		},
		obj:class Wizards {
			constructor (wizardName,coatColor,eyesColor){
				this.wizardName = wizardName;
				this.coatColor = coatColor;
				this.eyesColor = eyesColor;
			}
		}
	};
})();
