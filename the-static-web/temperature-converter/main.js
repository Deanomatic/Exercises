var button = document.getElementById("converter");//Declaring variables that contain the users input
var output = document.getElementById("finalTemp");//
var celsius = document.getElementById("c");
var celOn;							//this function does something
celsius.addEventListener("click", function(){
	celOn = true;//Added listener to radio button
});

var fahrenheit = document.getElementById("f");
fahrenheit.addEventListener("click", function(){
	celOn = false;//listener for fahrenhait button
});
button.addEventListener("click", determineConverter);

function toCelsius () {//function to do the conversion to cel
	var f = document.getElementById("tempInput").value;
	f = (f-32)/1.8;
	return f;
}
function toFahrenheit () {// function to convert to fahreenheit.
	var c = document.getElementById("tempInput").value;//value is used here instead of innerHTML
	c = c * 9 / 5 + 32;
	return c;
}

function determineConverter () {//function to run other functions
	var example = '';

	if(celOn) {
  	var Cvalue = toCelsius();
  	document.getElementById("finalTemp").innerHTML = Cvalue;
  	console.log(document.getElementById("finalTemp"));
  } else {
  	var Fvalue = toFahrenheit();
  	console.log(Fvalue);
  	document.getElementById("finalTemp").innerHTML = Fvalue;
  }

}
