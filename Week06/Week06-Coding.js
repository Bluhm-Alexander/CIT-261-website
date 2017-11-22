/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/
//This is a Global variable used to store items in shoppping cart
var cart = [];
var counter = 0;

/*************************************************************************
* This read in things from the Table I have created on the HTML
* and then loads the items into the Array of Objects.
**************************************************************************/
function problem1(position) {
	//Get The Table
	var table = document.getElementById("table1");
	
	var element = {}
	
	element.id = table.rows[position].cells[0].innerHTML;
	element.price = parseFloat(table.rows[position].cells[1].innerHTML);
	
	cart.push(element);
	displayCart();
}

/***************************************************************************
* DisplayCart creates a Table on the HTML page with a list of items from the
* Shopping cart.
****************************************************************************/

function displayCart() {
	var tableRef = document.getElementById("table2");
	
	var i = cart.length - 1;
	tableRef.deleteRow(-1); //delete empty total row
	//for (var i = 0; i < cart.length; i++) {
		var row= tableRef.insertRow();
            //create three cells for product properties 
        var cellName = row.insertCell(0);
        var cellPrice = row.insertCell(1);
		cellPrice.align="right";
		
		//fill cells with values from current product object of our array
        cellName.innerHTML = cart[i].id;
        cellPrice.innerHTML = cart[i].price.toFixed(2);
		
		//Add Total
		var total = 0;
		for (var j = 0; j < cart.length; j++){
			total += cart[j].price;
		}
		var newRow = tableRef.insertRow();
		var cellTotal = newRow.insertCell(0);
		var cellTotalPrice = newRow.insertCell(1);
		cellTotalPrice.align = "right";
		
		cellTotal.innerHTML = "Total";
		cellTotalPrice.innerHTML = total.toFixed(2);
		
		//Using Create Element to make a button
		//make an if statement to only make one button
		if (counter == 0) {
			var removeButton = document.createElement('button');
			removeButton.innerHTML = 'Remove';
		
		
			removeButton.setAttribute("id", "remButton");
			//Add Cell onto row with the Append function
			document.getElementById("div2").appendChild(removeButton);
			remcounter = counter;
			removeButton.onclick = function(){remove()};
	   
			//document.getElementById(string).addEventListener("click", remove);
		
			//increment counter
			counter++;
		}
		
		
		
}

/*****************************************************************************
* Calculate the total of the cart.
*******************************************************************************/

/****************************************************************************
* This function will remove a Item from the shopping cart and consequently 
* from the Table.
****************************************************************************/

function remove() {
	var row = document.getElementById("table2");
	var numRows = document.getElementById("table2").getElementsByTagName("tr").length;
	var total = 0;
	cart.splice(cart.length - 1, 1);
	if (numRows > 2){
		row.deleteRow(numRows - 2);
		for (var j = 0; j < cart.length; j++){
			total += cart[j].price;
		}
		document.getElementById("table2").rows[numRows - 2].cells[1].innerHTML = total.toFixed(2);
	}
}

/****************************************************************************
* Ye be warned this is unused Code. Stuff I was experimenting With this week
* I wanted to save JSON files to a local directory but it turns out that is
* impossible without a PHP server to take and save your JSON files.
****************************************************************************/
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

function saveGo() {
	var myJSON = JSON.stringify(cart);
	//Saving the File
	var fs = require('fs');
	fs.writeFile("test.txt", myJSON, function(err) {
    if(err) {
        return console.log(err);
    }
});
	
	location.href="checkout.html";
}

