var colors = [
	"rgb(255, 0,0 )",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var resultDisplay = document.getElementById("result");
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		


		if (pickedColor === clickedColor){
		//Why (pickedColor === clickedColor) doesn't work?
		//rgb(x,x,x) != rgb(x, x, x) space matter. need to be completely same. 

		resultDisplay.textContent = "Correct!";
		correctColor();


		} else {
		this.style.background = "#232323";
		resultDisplay.textContent = "Try again!";
		
		}

	});
	
}


function correctColor(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = pickedColor;
		//set all suqares background color as picked color
	}
};


function pickColor(){
	var random = Math.floor(Math.random()*squares.length);
	//return random number 0 ~ 5
	//Math.floor, cut off all decimal value.
	//Math.random, return randome value between 0 and 1 (ex, 0.133563522)
	return colors[random];

}

