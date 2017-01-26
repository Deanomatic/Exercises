// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"	];
var Alpha;//This is gonna store something. not sure what yet.
Alpha = "";//this is so i have something to add on to using alphabet Array
var space = " "
// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    for (var i = 0; i < theAlphabetArray.length; i++) {
    	Alpha += alphabet[i];//this is the key. I called Alpha and not alphabet because I'm using the loop to add on to Alpha
    	if ((i + 1) % 3 === 0) {// i need i + 1 so I i don't start with a
    		Alpha += space;
    	}// logging Alpha cause that's the final result.
    	console.log(Alpha);
    }  

    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
}

// Invoke the function and pass in the array
stackLetters(alphabet)