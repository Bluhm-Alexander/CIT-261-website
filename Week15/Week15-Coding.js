/*
*	Week15-Coding.js
*   Author: Alexander Bluhm
*/

//Global Variables for X Y coordinates
var x = 0;
var y = 0;
var facingRight;
var facingLeft;
var demo1 = false;
var demo2 = false;

function start() {
	controls();
}


/*********************************************************************************
* This Next Section is for My animated mario Sprite
*
*********************************************************************************/
function leftArrowPressed() {
	var element = document.getElementById("mariorun");
	x += -5;
	if (facingRight) {
		//alert("turning");
		element.style.animation = "turn .1s forwards, .2s playleft .3s steps(3) infinite";
		element.style.transform = "translateY(" + y + "px) translateX(" + x + "px)";
		element.style.animationPlayState = "running";
		document.getElementById("displayx").innerHTML = x;
			
	}
	else {
		element.style.animation = "playleft .3s steps(3) infinite";
		element.style.transform = "translateY(" + y + "px) translateX(" + x + "px)";
		element.style.animationPlayState = "running";
		document.getElementById("displayx").innerHTML = x;
	}
	facingLeft = true;
	facingRight = false;
}

function rightArrowPressed() {
	var element = document.getElementById("mariorun");
	x += 5;
	
	if(facingLeft) {
		element.style.animation = "turn .1s forwards, .2s playRight .3s steps(3) infinite";
		element.style.transform = "translateY(" + y + "px) translateX(" + x + "px)";
		element.style.animationPlayState = "running";
		document.getElementById("displayx").innerHTML = x;
	}
	
	else {
		element.style.animation = "playright .3s steps(3) infinite";
		element.style.transform = "translateY(" + y + "px) translateX(" + x + "px)";
		element.style.animationPlayState = "running";
		document.getElementById("displayx").innerHTML = x;
	}
	
	facingLeft = false;
	facingRight = true;
}

function upArrowPressed() {
	var element = document.getElementById("mariorun");
	y += -5;
	element.style.transform = "translateY(" + y + "px) translateX(" + x + "px)";
	element.style.animationPlayState = "running";
	document.getElementById("displayy").innerHTML = y;
}

function downArrowPressed() {
	var element = document.getElementById("mariorun");
	y += 5;
	element.style.transform = "translateY(" + y + "px) translateX(" + x + "px)";
	element.style.animationPlayState = "running";
	document.getElementById("displayy").innerHTML = y;
}

function onKeyUp() {
	var elem = document.getElementById("mariorun");
	elem.style.animationPlayState = "paused";
	if (facingLeft)
		elem.style.animation = "stillleft .3s linear";
	else {
		//alert("callRight");
		//elem.style.animationPlayState = "pause";
		elem.style.animation = "stillright .2s steps(1) forwards";
		//elem.style.animationPlayState = "play";
		elem.style.backgroundPosition = "336px";
	}
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

/*********************************************************************************
* Must Prevent arrow keys from scrolling the webpage. Need to listen and disable 
* HTML defaults
**********************************************************************************/

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


window.onload = start;

/***********************************************************************************
* Other Examples
* Problem2()
************************************************************************************/

function problem2() {
	elem = document.getElementById("demo1");
	if (demo1) {
		elem.style.animationPlayState = "paused";
		demo1 = false;
	}
	else {
		elem.style.animation = "colors 3s infinite";
		demo1 = true;
	}
}

function problem3() {
	elem = document.getElementById("demo2");
	if (demo2) {
		elem.style.animationPlayState = "paused";
		demo2 = false;
	}
	else {
		elem.style.animation = "mover 3s infinite";
		demo2 = true;
	}
}