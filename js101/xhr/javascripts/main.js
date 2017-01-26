console.log("hello HXR");

var startTime = Date.now();
// console.log("Date Bebins:", startTime);

// for (var i = 0; i < 900000000; i++) {
// 	var x = i + 1/3 * 70 -411;
// }
// console.log("I just looped", i, "times")
// var nextTime = Date.now();
// console.log("Delay:", nextTime - startTime);

var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

//my function should do onething and that one thing really well.
function dataRequestComplete(event) {
	console.log("THE BIG transfer is complete and we have data")
	var dataDumpTime = Date.now();
	console.log("date of dataDumpTime", dataDumpTime, "since beginning", dataDumpTime - startTime)
	var data = JSON.parse(event.target.responseText);
	console.log("THE BIG Data:", data);
	console.log(Date.now() - startTime);

}
function dataRequestFailed(event) {
	console.log("oops, an error occurred", event);
}

dataRequest.open("GET", "color.json");

dataRequest.send();
/////////////////////////////////////////////////////////////////////////////

var dataRequest2 = new XMLHttpRequest();
dataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataRequest2.addEventListener("error", dataRequestFailed);

function dataRequest2LoadComplete(event){
	console.log("Small data");
	var smallData = JSON.parse(event.target.responseText);
	console.log("smallData", smallData);
	showData(smallData);
}

function showData(itDontMatter){
	var colorDiv = document.getElementById("all-my-colors");

	for (whatever in itDontMatter){
		var colorData = ``;
		var colorItem = itDontMatter[whatever];

		colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2></div>`;

		colorDiv.innerHTML += colorData;
	}
};

dataRequest2.open("GET", "color.json");
dataRequest2.send();

console.log("date at end of page", Date.now());

