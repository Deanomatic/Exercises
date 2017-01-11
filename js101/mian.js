

var myFunction = function(){ //function expression
	var blah = "myFunction ran away"
	return blah;
}

function myOtherFuntion(){ //function decleration
	return blah;
}

function ReturnNothing(){
	var blah = "I don't return anything!";

}

function addStuff(){
	var sum = 2+2;
	return sum;

}

var result = addStuff();
console.log("result", result);

function add(one, two){
	console.log(one + two)
	return one + two;
};

var newVal = add(3,12);
console.log("newVal", newVal);

// function add (bread, butter){
// 	return bread + butter;
// 	console.log(addValues)
// }

function subtract (one, two){
	return one - two;
}

function preformAction(numberOne, numberTwo, action){
	action(numberOne, numberTwo); // add(2, 3) 
}

var addValues = preformAction(2, 3, add);