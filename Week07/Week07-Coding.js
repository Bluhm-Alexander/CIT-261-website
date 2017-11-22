/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/
//This is a Global variable used to store items in shoppping cart
var cart = [];
var counter = 0;

/*************************************************************************
* Read in things from JSON File and put them in a list.
**************************************************************************/
function problem1(position) {
	
	var xmlhttp = new XMLHttpRequest();
	var url = "test.json";

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			myFunction(myArr);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(arr) {
		var list = document.getElementById("shoppping");
		var i;
		var entry = document.createElement("li");
		for(i = 0; i < arr.length; i++) {
			entry.appendChild(document.createTextNode(arr[i].groceries));
			list.appendChild(entry);
		}
	}
	
}

