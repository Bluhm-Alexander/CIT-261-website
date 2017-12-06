/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/


function problem1(color) {
	var elem = document.getElementById('demo');
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = color;
}

function problem2() {
	var elem = document.getElementById('colorBox');
	elem.style.transition = "width 2s";
	elem.style.width = "300px";
	
	setTimeout(function() {
	elem.style.transition = "width 2s";
	elem.style.width = "100px";
		
	}, 2000);
}

function shrink() {
	var elem = document.getElementById('opener');
	elem.style.transition = "height 0.2s linear 0s";
	elem.style.height = "0px";
}

function expand() {
	var elem = document.getElementById('opener');
	elem.style.transition = "height 0.2s linear 0s";
	elem.style.height = "200px";
}

function startAnimation() {
	rotBox.style.animation = "myfirst 5s linear 0s infinite alternate";
}

function stopAnimation() {
	rotBox.style.animation = "";
}
