/*
*	Week04-Coding.js
*   Author: Alexander Bluhm
*/



//This wil tell webGL what to draw and what to load in the shaders
var vertexShaderText =
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'attribute vec3 vertColor;',
'varying vec3 fragColor;',
'',
'void main()',
'{',
'	fragColor = vertColor;',
'	gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

var fragmentShaderText =
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
'	gl_FragColor = vec4(fragColor, 1.0);',
'}'
].join('\n');

function InitDemo(){
	console.log('function called');
	
	var canvas = document.getElementById("game-surface");
	var gl = canvas.getContext('webgl');   //For Chrome and Firefox this tells the
	//browser that we are using WebGL
	
	//If they are using Internet Explorer or Edge we have to call experimental
	if(!gl){
		console.log('falling back to experimental');
		gl = canvas.getContext('experimental-webgl');
	}
	//if we cant initialize gl that means it is not supported
	if (!gl) {
		alert('Your Browser does not support WebGL');
	}
	
	//We are now going to assign color (R, G, B, A)
	gl.clearColor(0.75, 0.85, 0.8, 1.0);
	//now storing color in the buffer
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	//We are going to load up the object into the buffer basically 
	//sending it the shape
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	
	//TIME TO LOAD IN THE INFORMATION FROM THE TWO ARRAYS ABOVE THE FUNCTION.
	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragmentShader, fragmentShaderText);
	
	//now it is time to compile the shader condense evrything and put it into
	//the piepline
	gl.compileShader(vertexShader);
	//Ok we are now going to check for errors with the Arrays we have made
	//This should tell us if we have made any syntax errors or if we have given
	//an invalid command
	if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
		console.error('Error compiling vertex shader', gl.getShaderInfoLog(vertexShader));
		return;
	}
	//Now we do error handling for fragment
	gl.compileShader(fragmentShader);
	if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)){
		console.error('Error compiling fragment shader', gl.getShaderInfoLog(fragmentShader));
		return;
	}
	//now we tell openGL that these are the two programs we want to run
	//think of shaders as individual components and programs as finished products
	var program = gl.createProgram();
	//when your attaching fragment and shader openGL can determine which type is which
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	//Now we link the program make it executable for openGL
	gl.linkProgram(program);
	//check for errors with program
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)){
		console.error('ERROR linking program!', gl.getProgramInfoLog(program));
		return;
	}
	
	//Validating catches additional errors
	gl.validateProgram(program);
	if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
		console.error('Error with validation', gl.getProgramInfoLog(program));
		return;
	}
	//
	// Everything is now set up so now we enter in our vertices!
	//
	
	var triangleVertices =
	[ // X, Y,		R, G, B,
		0.0, 0.5,	1.0, 1.0, 0.0,
		-0.5, -0.5,	0.7, 0.0, 1.0,
		0.5, -0.5,	0.1, 1.0, 0.6
	];
	
	//OUR vertices are sitting in RAM right now we need to send them to the
	//graphics card memory buffer
	var triangleVertexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
	//we have to convert our triangleVertices to 32 bit numbers because right now
	//they are 64 bit
	//Also not that static draw is only going to send the data to the GPU once
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
	
	//All of this below is making the numbers known and understandable to the GPU
	var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
	var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
	gl.vertexAttribPointer(
		positionAttribLocation, //Attribute Location
		2, //number of elements per attribute
		gl.FLOAT,  //type of elements
		gl.FALSE,
		5 * Float32Array.BYTES_PER_ELEMENT, //size of an individual vertex
		0 //Offset from the beginning of a single vertex to this attribute
	);
	gl.vertexAttribPointer(
		colorAttribLocation, //Attribute Location
		3, //number of elements per attribute
		gl.FLOAT,  //type of elements
		gl.FALSE,
		5 * Float32Array.BYTES_PER_ELEMENT, //size of an individual vertex
		2 * Float32Array.BYTES_PER_ELEMENT //Offset from the beginning of a single vertex to this attribute
	);
	//now we make the attribute usable
	gl.enableVertexAttribArray(positionAttribLocation);
	gl.enableVertexAttribArray(colorAttribLocation);
	//
	// Now it is time for the MAIN RENDER LOOP!
	//
	gl.useProgram(program);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function makeBig() { 
    var myVideo = document.getElementById("video");
	myVideo.width = 560; 
} 

function makeSmall() { 
	var myVideo = document.getElementById("video");
    myVideo.width = 320; 
} 

function makeNormal() { 
	var myVideo = document.getElementById("video");
    myVideo.width = 420; 
}