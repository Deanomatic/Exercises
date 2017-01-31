  "use strict";
//I got my variables declared to grad ids
//
var outputEl = document.getElementById("output-target");
var articleEl = document.getElementsByClassName("article-section", "article-section1", "article-section3");
console.log("articleEl",articleEl);

function handleSectionClick(mouseEvent) {// 
  console.log(mouseEvent);
  var elementText = mouseEvent.target.innerHTML; 
  outputEl.innerHTML = "You clicked on the " + elementText;
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

var header = document.getElementById("page-header");

function handleHeaderMouseOver(event) {
  outputEl.innerHTML ="You moved over the header";
}

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = "You left me!!!";
}

header.addEventListener("mouseover", handleHeaderMouseOver);//event listener for header mouse over and mouse out
header.addEventListener("mouseout", handleHeaderMouseOut);

var mirror = document.getElementById("keypress-input");

mirror.addEventListener("keyup", function(event) {
  console.log("event",event);
  outputEl.innerHTML = event.target.value;
});


var pig = document.getElementById("guinea-pig");

document.getElementById("add-color")
  .addEventListener("click", function() {
  console.log("do i work")
  pig.classList.toggle("blue");
});

document.getElementById("make-large")
  .addEventListener("click", function() {
  pig.classList.toggle("large");
});

document.getElementById("add-border")
  .addEventListener("click", function() {
  pig.classList.toggle("bordered");
});

document.getElementById("add-rounding")
  .addEventListener("click", function() {
  pig.classList.toggle("rounded");
});
