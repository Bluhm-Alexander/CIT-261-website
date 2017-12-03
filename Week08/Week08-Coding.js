/*
*	Week08-Coding.js
*   Author: Alexander Bluhm
*/
//Using local storage API to store information

function problem1() {
	var object = {};
	
	object.firstName = document.getElementById("firstname").value;
	object.lastName = document.getElementById("lastname").value;
	object.gender = document.getElementById("gender").value;
	
	//First we are going to do a check to see if local storage is 
	//available to us. If not display alert.
	var myJson = JSON.stringify(object);
	
	
	if (typeof(Storage) !== "undefined") {
		sessionStorage.setItem('form', myJson);
	}
	
	else {
		alert("warning cannot open Local Storage");
	}

	//retrieve object from lesson storage import in new
	var newobj = JSON.parse(sessionStorage.getItem("form"));
	
	//This section is for the output page
	localStorage.setItem('option', 1);   //Which function was called
	var output = {};
	output.header = "Problem 1: Stringified Object";
	
	output.body = "This Shows the output of the form that has been stringified and then parsed." + 
	" Everything has been parsed into a new Object from the string in web storage.";
	
	var resultStrings = JSON.stringify(output);
	localStorage.setItem('resultStrings', resultStrings);
	
	
	location.href = "results.html";
	
}

function problem2() {
	var thing = document.querySelector('input[name = "thing"]:checked').value;
	var state = document.querySelector('input[name = "state"]:checked').value;
	
	localStorage.setItem('thing', thing);
	localStorage.setItem('state', state);
	
	//This section is for the output page
	localStorage.setItem('option', 2);   //Which function was called
	var output = {};
	output.header = "Problem 2: Idividual Variables";
	
	output.body = "This Shows the output of the two stored string variables It's just been formatted into a sentence.";
	
	var resultStrings = JSON.stringify(output);
	localStorage.setItem('resultStrings', resultStrings);
	
	
	location.href = "results.html";
}

function problem3() {
	sessionStorage.setItem('number1', 3);
	sessionStorage.setItem('number2', 7);
	sessionStorage.setItem('number3', 5);
	
	//going to attempt a number array
	var list = [];
	for (var i = 1; i < 11; i++) {
		list.push(i);
	}
	
	sessionStorage.setItem('list', list);
	
	//This section is for the output page
	localStorage.setItem('option', 3);   //Which function was called
	var output = {};
	output.header = "Problem 3: Idividual Number Variables and Number Arrays";
	
	output.body = "This Shows the output of the Numbers stored in Session Storage. I'm going to do a little math with them to prove they are integers."  + 
	"I'm also going to display a simple array of numbers but it should " + 
	"be noted that I cannot do anything with these numbers and they are just " + 
	"a string.";;
	
	var resultStrings = JSON.stringify(output);
	localStorage.setItem('resultStrings', resultStrings);
	
	
	location.href = "results.html";
}
