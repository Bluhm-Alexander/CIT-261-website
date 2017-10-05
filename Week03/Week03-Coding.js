/*
*	Week03-Coding.js
*   Author: Alexander Bluhm
*/

function problem1() {
	
	//we are going to populate this empty Array with (A B C) * (1 2 3)
	var array = [];
	//This Array contain A B C just so we can loop through it
	var alphabet = ["A", "B", "C",]
	//putting array length into seperate var for convinience
	var alphabetLength = alphabet.length;
	
	//Put Numbers and Letters together
	for (var i = 0; i < alphabetLength; i++) {
		for (var j = 1; j < 4; j++) {
			array.push(alphabet[i] + j);
		}
	}
	
	var y = 0;
	 for(var i = 1; i < table1.rows.length; i++)
        {
          // cells
          for(var j = 1; j < table1.rows[i].cells.length; j++)
          {
              table1.rows[i].cells[j].innerHTML = array[y];
			  y++;
          }
        }
		
}

function problem2(name1, age1) {
	var name = name1;
	var age = parseInt(age1);
		
	if (/^[a-z\-_\s]+$/i.test(name)) {
		document.getElementById("output1").innerHTML = "That is a valid name";
	}
	else
	{
		document.getElementById("output1").innerHTML = "That is a invalid name";
	}
		
	if (/^[0-9]\d*$/.test(age)) {
		document.getElementById("output2").innerHTML = "your age is: " + age;
	}
	else {
		document.getElementById("output2").innerHTML = "Please enter a valid age";
	}
}

function problem3() {
	var car = [];
	car["make"] = "Hyundai";
	car["model"] = "Elantra";
	car["year"] = 2004;
	
	table2.rows[1].cells[1].innerHTML = car["make"];
	table2.rows[2].cells[1].innerHTML = car["model"];
	table2.rows[3].cells[1].innerHTML = car["year"];
	
	
}