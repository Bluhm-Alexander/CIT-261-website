/*
*	Week08-Coding.js
*   Author: Alexander Bluhm
*/
//Using local storage API to store information

function problem1() {
	var object = [];
	
	object.firstName = document.getElementById("firstname").value;
	object.lastName = document.getElementById("lastname").value;
	object.gender = document.getElementById("gender").value;
	
	document.getElementById("demo").innerHTML = object.firstName;
	//First we are going to do a check to see if local storage is 
	//available to us. If not display alert.
	sessionStorage.stored = "john";
	if (typeof(Storage) !== "undefined") {
		sessionStorage.setItem('object', JSON.stringify(object));
	}
	
	else {
		alert("warning cannot open Local Storage");
	}

	//retrieve object from lesson storage import in new
	//var newObject = JSON.parse(sessionStorage.stored);
	document.getElementById("demo").innerHTML = sessionStorage.stored;
}
