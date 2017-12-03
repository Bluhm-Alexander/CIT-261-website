/*
*	Week09-Coding.js
*   Author: Alexander Bluhm
*/

function setWidth() {
	document.getElementById("firstdiv").style.width = "800px";
}

var counter = 100;
var setter = 400;
function setCrazy() {
	
	setTimeout(function () {
		
      document.getElementById("firstdiv").style.width = setter+"px";          //  your code here   
		
      if (counter > -1) {
		  setCrazy();      //  decrement i and call myLoop again if i > 0
			--counter;
			setter++;
	  }
   }, 100)
}

function setOriginal() {
	document.getElementById("firstdiv").style.width = "400px";
	counter = 100;
	setter = 400;
}

function changeText() {
	//Editing and entire Class
	var color = document.getElementById("textcolor").value;
	var things = document.getElementsByClassName('lyrics');
	
	for (var i = 0; i < things.length; i++){
		things[i].style.color = color;
	}
	
}

/******************************************************************************
* Change color of DIv
*
******************************************************************************/

function changeBack(){
	var color = document.getElementById("favcolor").value;
	var things = document.getElementById('lyricsbox')
	
	things.style.backgroundColor = color;
	
}

function leftText() {
	document.getElementById("lyricbody").style.textAlign = "left";
}

function centerText() {
	document.getElementById("lyricbody").style.textAlign = "center";
}

function rightText() {
	document.getElementById("lyricbody").style.textAlign = "right";
}