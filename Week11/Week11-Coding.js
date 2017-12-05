/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/
//This is a Global variable used to store items in shoppping cart

//window.onload = problem1();

function start() {
	problem1();
	problem2();
	controls();
}

function problem1() {
	var elem = document.getElementsByClassName('loop-tester');
	for (var i = 0; i < elem.length; i++) {
		
		elem[i].style.transition = "opacity 1.0s linear 0s";
		elem[i].style.animation = "slide 1s forwards 0s";
		elem[i].style.opacity = "1";
	}
}

function problem2() {
	var elem = document.getElementsByClassName('subHeading');
	for (var i = 0; i < elem.length; i++) {
		
		elem[i].style.transition = "opacity 1.0s linear 0s";
		elem[i].style.animation = "slide 1s forwards 0s";
		elem[i].style.opacity = "1";
	}
}

function changeBlue() {
	var elem = document.getElementById('touch');
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = "#9bc8ff";
}

function changeWhite() {
	var elem = document.getElementById('touch');
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = "#ffffff";
}

/*********************************************************************************
* This Next Section is for My animated mario Sprite
*
*********************************************************************************/
function leftArrowPressed() {
	var element = document.getElementById("image1");
	element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed() {
	var element = document.getElementById("image1");
	element.style.left = parseInt(element.style.left) + 5 + 'px';
}

				function upArrowPressed() {
				var element = document.getElementById("image1");
				element.style.top = parseInt(element.style.top) - 5 + 'px';
				}

				function downArrowPressed() {
				var element = document.getElementById("image1");
				element.style.top = parseInt(element.style.top) + 5 + 'px';
				}

				function moveSelection(evt) {
					switch (evt.keyCode) {
						case 37:
						leftArrowPressed();
						break;
						case 39:
						rightArrowPressed();
						break;
						case 38:
						upArrowPressed();
						break;
						case 40:
						downArrowPressed();
						break;
						}
					};

function controls()
{
	//Event Li
	window.addEventListener('keydown', moveSelection);
}

window.onload = start;