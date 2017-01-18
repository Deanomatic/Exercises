var colors = ["Blue ", "Red ", "Orange ", "Purple ", "Hazel ", "Aquamarine ", "Periwinkle ", "Azure ", "Fuchsia ", "Chocolate ", "Amber ", "Amaranth "];
var reindeer = ["Dasher ", "Dancer ", "Prancer ", "Vixen ", "Comet ", "Cupid ", "Donner ", "Blitzen "];
var ReindeerColor; 
var SantaElement = document.getElementById("coloredReindeer");


for (i = 0; i < reindeer.length; i++) {
	ReindeerColor += ("<li class='whatever'>" + colors[i] + " " + reindeer [i] + "</li>");
	SantaElement.innerHTML = ReindeerColor;
};

console.log(ReindeerColor);




var PaintColors= ["Anew Grey", "Agreable Grey", "Stone", "Sea Salt", "Graphite"];
var PaintTypes = ["Emerald", "ProMar 200", "Cashmere", "ProClassic", "Superpaint Flat"];

for ( var i = 0; i <= PaintTypes.length; i++) {
	document.write(PaintTypes[i], PaintColors[i]);
};

var somePaint = document.getElementById("MyPaint");