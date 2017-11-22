/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/
//This is a Global variable used to store items in shoppping cart
var array = [];
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
		var list = document.getElementById("shopping");
		var i;
		//var entry = document.createElement("li");
		arr.forEach(function(arr) {
			var entry = document.createElement("li");
			entry.appendChild(document.createTextNode(arr.groceries));
			list.appendChild(entry);
			//document.getElementById("demo").innerHTML = arr.groceries;
		})
	}
	
}

/******************************************************************************
* Push Item onto Array
*
******************************************************************************/

function pushItem(){
	var x = {};
	x.groceries = document.getElementById("textfield").value;
	array.push(x);
	document.getElementById("textfield").value = "";
}

/******************************************************************************
* Display the contents of the array stringified
*****************************************************************************/

function displayJSON() {
	var myJSON = JSON.stringify(array);
	document.getElementById("demo").innerHTML = myJSON;

}