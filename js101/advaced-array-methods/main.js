console.log("Do I work ?")

var colors = ["red", "blue", "green", "yellow", "purple", "black", "white"]
						//item and index are placeholders
colors.forEach(function(item, index) {
	var newColorString = "I like this color " + item;
	console.log("newColorString", index, newColorString);
})// the forEach and for loop are the same thing.

for (var i = 0; i < colors.length; i++) {
//#########################################################


}
							//map saves us the steps of looping and and pushing
var reversedColors = colors.map(function(colors) {
	return colors.split("").reverse().join("");
})				//split literally splits an item
				//reverse reverses (duh) and join brings back together after split.

console.log("reversedColors", reversedColors);

//exact same as bottom
// var fourLetters = color.filter(function(color){
// 	return color.length === 4;
// });


var fourLetters = [];
for (var i = 0; i < colors.length; i++) {
	if (colors[i].length === 4) {
		fourLetters.push(colors[i]);
	}
};
//exact same as top

//#########################################################

		//adds 2, then shows one.
var numbers = [44, 55, 33, 66, 12, 13, 52, 64, 6,];

var sum = numbers.reduce(function(prev, curr) {
	console.log("prev:", prev, "curr:", curr);
	return prev + curr;
});

console.log("sum", sum);


//
//****************************************
var integers = [33, 52, 63, 75, 58, 3, 5, 887,];

var chainingRes = integers
//sort is used to to sort and the a-b is telling us how to sort.
.sort(function(a, b){return a-b})
.reverse()
.filter(function(num) {return num < 19})
.map(function(num){return (num * 1.5) -1})
.reduce(function(prev, curr) {return prev + curr});

console.log("chainingRes", chainingRes);