/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/


//This function will construct a Father Object which
//the son object is going to inherit from. son Object will inherit
//the fathers name.
var Father = function(name) {
	this.name = name;
}

//This is a protoype function belonging to the Father object
//note how the prototype function is defined which is what we want
//the reason for this is because the only way inheritance
//can work in javascript is with prototypes which aree linked to
//their respective Objects.
Father.prototype.getName = function() {
	return this.name;
}

//this object is going to Inherit from the father object
var Son = function(age) {
	this.age = age;
}

Father.prototype.getAge = function() {
	return this.age;
}

//For the sake of convenience problem 1 call multiple methods in one function.
function problem1() {
	
	//We will create 2 instances of our father and son objects
	
	var father = new Father("Jethro");

	//This is where the magic happens, our Son object is going to
	//Inherit properties from the Father class by use of prototypes.
	//Note that we are linking up to the variable.
	Son.prototype = father;
	
	
	//Now we allocate an instance of the Son object.
	var son = new Son("12");


	
	//When we set the Son prototypes to father we may have over ridden the 
	//sons methods with the fathers methods.
	document.getElementById("fatherOut").innerHTML = father.getName();
	document.getElementById("sonOut").innerHTML = son.getName();
	document.getElementById("sonOut2").innerHTML = son.getAge();
}

//This is Functional Based Instantiation of object Mellon
var Mellon = function() {
	var object = {}
	
	//These are the properties of the object
	object.color = "Green";
	object.size = 0;
	object.seeds = true;
	
	//Methods of the object
	object.displayColor = function() {
		document.getElementById("watermellonColor").innerHTML = object.color;
	}
	
	object.getSize = function() {
		var a = document.getElementById("a").value;
		var b = document.getElementById("b").value;
		var c = document.getElementById("c").value;
		
		var answer = (4/3) * Math.PI * (a * b * c);
		answer = Math.abs(answer);
		object.size = parseFloat(Math.round(answer * 100) / 100).toFixed(2);
		document.getElementById("WatermellonSize").innerHTML = object.size + " Cubic Inches";
	}
	
	object.getSeeds = function() {
		document.getElementById("watermellonSeeds").innerHTML = object.seeds;
	}
	
	//End of function definition returning object
	
	return object;
}
//This is protoypal Instantiation
var Dog = function() {
	var obj = Object.create(objMethods);
	//Setting properties of Dog
	obj.breed = "Labrador";
	obj.weight = "64 Pounds";
	obj.mood = "Bored";
	
	return obj;
}

//The Methods of the object Dog are outside of the function definition
//the memory of the system has complete access to these funtions all the
//time meaning they do not have to be duplicated every time the object is created.

var objMethods = {

	getBreed: function() {
		document.getElementById("dogBreed").innerHTML = this.breed;
	}, //There are a couple different ways we can write this 
		//the comma is there to tell the prototype to look forward
	getWeight: function() {
		document.getElementById("dogWeight").innerHTML = this.weight;
	}
}
	
	//This is the other way to write it and this is more classical
	objMethods.getMood = function() {
		document.getElementById("dogMood").innerHTML = this.mood;
	}



function problem2() {
	var mellon = Mellon();
	
	mellon.displayColor();
	mellon.getSize();
	mellon.getSeeds();
	
	//creating a dog object
	var dog = Dog();
	
	dog.getBreed();
	dog.getWeight();
	dog.getMood();
}

//Below is functional shared instantiation example

var Truck = function() {
	var obj = {};
	
	obj.type = "Ford";
	obj.color = "Blue";
	obj.make = "F150";
	
	extend(obj, objectMethods);
	
	return obj;
}

var extend = function(obj, methods) {
	for (var key in methods) {
		obj[key] = methods[key];
	}
}

var objectMethods = {
	getType: function() {
		document.getElementById("truckType").innerHTML = this.type;
	},
	getColor: function() {
		document.getElementById("truckColor").innerHTML = this.color;
	},
	getMake: function() {
		document.getElementById("truckMake").innerHTML = this.make;
	}
}	
	
//This is problem3()
	
function problem3() {
	var truck = Truck();
	
	truck.getType();
	truck.getColor();
	truck.getMake();
	
}