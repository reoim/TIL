var colors = [
	"rgb(255,0,0)",
	"rgb(255,255,0)",
	"rgb(0,255,0)",
	"rgb(0,255,255)",
	"rgb(0,0,255)",
	"rgb(255,0,255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for(i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		


		if (pickedColor === clickedColor){
		alert("correct"); //doesn't work, need to be fixed.
		} else {
		alert("try again");
		}

	});
	
}


