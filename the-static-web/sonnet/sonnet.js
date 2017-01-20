var sonnet = document.getElementById('sonnet').textContent;//textContent is the same as innerHTML. They just pull content of the html.
console.log(sonnet);


// this is how i search a string
//search finds word
// indexOf finds place of
var orphanSearch = sonnet.search('orphans');
console.log('orphans', orphanSearch);

//output number of content

var textLength = sonnet.length;
	console.log(textLength);

// replace winter with yuletide
var winterReplace = sonnet.replace('winter', 'yuletide');

console.log(winterReplace);

var replaceThe = sonnet.replace(/the /gi, 'a large ');

console.log(replaceThe)

document.getElementById('sonnet').innerHTML = replaceThe;