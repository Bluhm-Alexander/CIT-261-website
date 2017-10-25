/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/


function problem1() {
	//Storing data:
	myObj = { "name":"John", "height":"5' 9\"", "likes":"New York" };
	myJSON = JSON.stringify(myObj);
	localStorage.setItem("testJSON", myJSON);

	//Retrieving data:
	text = localStorage.getItem("testJSON");
	obj = JSON.parse(text);
	document.getElementById("name").innerHTML = obj.name;
	
	document.getElementById("height").innerHTML = obj.height;
	document.getElementById("likes").innerHTML = obj.likes;
}

function loadJSON(callback) {   

	//Create new XMLhttp request query the server
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'test.json', true); //opening file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}


function problem2() {
		loadJSON(function(response) {
  // Parse JSON string into object
    var loaded = JSON.parse(response);
	//just loading stuff to page now
		document.getElementById("mike").innerHTML = loaded.mike;
		document.getElementById("lucas").innerHTML = loaded.lucas;
		document.getElementById("dustin").innerHTML = loaded.dustin;
 });
}