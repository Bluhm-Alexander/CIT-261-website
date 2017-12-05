/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/
//This is a Global variable used to store items in shoppping cart

//window.onload = problem1();

function start() {
	problem1();
	problem2();
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

window.onload = start;