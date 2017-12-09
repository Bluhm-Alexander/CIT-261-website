/*
*	Week14-Coding.js
*   Author: Alexander Bluhm
*/

function rotX() {
	var elem = document.getElementById('demo1');
	
	elem.style.transition = "transform 1s linear 0s";
	elem.style.transform = "rotateX(360deg)";
	
	setTimeout(clean, 1000);
}

function rotX180() {
	var elem = document.getElementById('demo1');
	
	elem.style.transition = "transform 1s linear 0s";
	elem.style.transform = "rotateX(180deg)";
}

function clean() {
	var elem = document.getElementById('demo1');
	elem.style.transition = "transform 1s linear 0s";
	elem.style.transform = "none";
}

function moveBox() {
	var elem = document.getElementById('demo2');
	elem.style.transition = "none";
	elem.style.transform = "translate(300px,100px)";
}

function resetBox() {
	var elem = document.getElementById('demo2');
	elem.style.transform = "none";
}

function animateBox() {
	var elem = document.getElementById('demo2');
	elem.style.transition = "transform 1s linear 0s";
	elem.style.transform = "translate(300px,100px)";
}

function coolStuff() {
	var elem = document.getElementById('demo3');
	var elem1 = document.getElementById('demo4');
	
	
	elem.style.transition = "all 1s linear 0s";
	elem.style.transform = "rotateY(90deg) translate(100px)";
	
	elem1.style.transition = "all 1s linear 0s";
	elem1.style.transform = "rotateY(90deg) translate(-200px)";
}

function resetStuff() {
	var elem = document.getElementById('demo3');
	var elem1 = document.getElementById('demo4');
	
	elem.style.transform = "none";
	elem1.style.transform = "none";
}