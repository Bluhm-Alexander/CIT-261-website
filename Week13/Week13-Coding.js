/*
*	Week13-Coding.js
*   Author: Alexander Bluhm
*/
function navBar(num) {
	var elem = document.getElementsByClassName('active');
	
	
	elem[num].style.transition = "background .5s linear";
	elem[num].style.background = "#4CAF50";
	elem[num].style.color = "white"
	
	for (var i = 0; i < elem.length; i++) {
		if (i != num) {
			elem[i].style.transition = "background .5s linear";
			elem[i].style.background = "#0047ba";
			elem[i].style.color = "white"
		}
	}
	shrink();
	expand(num);
}

function shrink() {
	var elem = document.getElementsByClassName('loop-tester');
	var head = document.getElementsByClassName('subHeading');
	
	for (var i = 0; i < head.length; i++) {
		
		head[i].style.transition = "height 0.2s linear 0s";
		head[i].style.height = "0px";
	}
	
	for (var i = 0; i < elem.length; i++) {
		
		elem[i].style.transition = "height 0.2s linear 0s, opacity 0.2s linear 0s";
		elem[i].style.height = "0px";
		elem[i].style.opacity = "0";
	}
}

function expand(num) {
	var elem = document.getElementsByClassName('loop-tester');
	elem[num].style.transition = "opacity 0.2s linear 0s, margin-left 0.2s linear 0s";
	elem[num].style.height = "450px";
	elem[num].style.opacity = "1";
	
	var head = document.getElementsByClassName('subHeading');
	head[num].style.transition = "height 0.2s linear 0s";
	head[num].style.height = "75px";
}

function problem1(num) {
				var elem = document.getElementById('demo1');

			elem.style.transition = "margin-left 0.2s linear 0s";
			elem.style.marginLeft = "200px";
			setTimeout(function() {
			elem.style.transition = "margin-left 0.2s linear 0s";
			elem.style.marginLeft = "0px";
			
			}, 400);
}