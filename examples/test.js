console.log("Yo what's up dog!");

var test = "This is a test, I don't even know what I'm doing";
console.log("test" , test);

var hoursInYear = 24 * 365;
console.log(hoursInYear);

//THis is a comment
/*
this is a BIIIIIIIIIiiiiiiiiiiiiiiiiiiiiiiiiii
dfwiefwherlaerhgfaslGGGGGGGG

comment!

*/

var minsInDecade= (hoursInYear * 60) * 10;
console.log("minsInDecade")

var age = 21;
var secoondsInYear = hoursInYear * 60 * 60;
var ageInSeconds = secoondsInYear * age;
console.log(ageInSeconds);

var wiseValue = 35;
if (age > wiseValue) {
	console.log("You are wise");
}else {
	console.log("You are young and stupid!");
}

var myNum = 662256000.;
var shortNum = myNum.toFixed(2);
console.log(shortNum);

var num = 2;
var num2 = "2";
console.log("add", num + num2, "oh yeah" + " today is cold");

///////////////////////////////////////////////////////////////////////////////
//Strings yaya!!


var phrase = "Bama is goin to crush Clemson today and then be national champs.";
console.log(phrase.indexOf("B")); 

var phrase2 = "I'm in over my head.";
var position = phrase2.charAt(8);
console.log(position);

var phrase3 = "This is crazy but cool stuff!";
var newPhrase3 = phrase3.replace("cool", "whimpy");
console.log("newPhrase3", newPhrase3); 

var phrase4 = "the lazy dog likes the wierd fox";
var newPhrase4 = phrase4.replace(/o/g, "i");
console.log(newPhrase4);

//Dom interaction

var phraseString = document.getElementById("phrase").innerHTML;
console.log(phraseString)

var ClassStuff = document.getElementsByClassName("Classy");
console.log(ClassStuff);

var addToDOM = document.getElementById("demo");
addToDOM.innerHTML = "Hi there, NSS ninjas";

/////////////////////////////////////////////////////////////////
// Arrays

var myJunkDrawer = [3, "dime", true, null, "28"];
console.log(myJunkDrawer);

myJunkDrawer.push("baseball");
console.log(myJunkDrawer);

myJunkDrawer.unshift("what is this????");
console.log(myJunkDrawer);

var thing = myJunkDrawer.pop();
console.log(thing);

/////////////////////////////////////////
// Object

var songArray = [];
var myObjecrt = {};

var song = {  

	title: "Sweet Home Alabama",
	artist: "Lynyrd Skynyrd",
	album: "Second Helping",
	awards: ["best band", "ever!!!!"],
	type: {

		style: "southern rock",
		listenability: "none",
		producers: {
			name1: "Dean Smith",
			name2: "Spencer Smith", 
		}

	},
	listAwards: function(magic){
		console.log("Show me the "+magic);
	}
};

console.log(song.title);

song.title = 'test';
console.log(song.title);
songArray.push(song);
console.log("song", song)

console.log("Object.keys song"), Object.keys(song);
song.listAwards('example')

for(var i = 0; i < 5; i++){
	song.listAwards(i);
}


