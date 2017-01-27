// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var hohohoElement = document.getElementById("coloredReindeer");

//loop thru reindeer and join arrays
for (var r = 0; r < reindeer.length; r++){
	var coloredReindeer = colors[0] + reindeer[0];
	console.log(coloredReindeer);
}

