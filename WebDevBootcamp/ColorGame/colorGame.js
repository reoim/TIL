var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(numSquares);
var colorDisplay = document.getElementById("colorDisplay");
var resultDisplay = document.getElementById("result");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");


colorDisplay.textContent = pickedColor; //Display RGB color code



easyButton.addEventListener("click", function(){
	//change background of the button when it is clicked. Also change background of other button
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	resetEasy();
	resultDisplay.textContent = "";

	
})

hardButton.addEventListener("click", function(){
	//change background of the button when it is clicked. Also change background of other button
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	reset();
	resultDisplay.textContent = "";

	
})

resetButton.addEventListener("click", function(){
	reset(); //if the reset button clicked, call reset function.
	resultDisplay.textContent = "";

})




setColor();

function setColor(){

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			


			if (pickedColor === clickedColor){
			//Why (pickedColor === clickedColor) doesn't work?
			//rgb(x,x,x) != rgb(x, x, x) space matter. need to be completely same. 

			resultDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			correctColor();


			} else {
			this.style.background = "#232323";
			resultDisplay.textContent = "Try again!";
			
			}

		});
		
	}
}





function correctColor(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = pickedColor;
		//set all suqares background color as picked color
		h1.style.background = pickedColor;
	}
};


function pickColor(num){
	var random = Math.floor(Math.random()*num);
	//return random number 0 ~ 5
	//Math.floor, cut off all decimal value.
	//Math.random, return randome value between 0 and 1 (ex, 0.133563522)
	return colors[random];

}

function generateColors(num){
	//make array
	var colorArr = [];
	//push random color to array
	for(var i = 0; i < num; i++){

		colorArr.push(randomColors());
	}
	//return array
	return colorArr;
}

function randomColors(){
	//red 0 ~ 255
	var r = Math.floor(Math.random()*256);
	//green 0 ~ 255
	var g = Math.floor(Math.random()*256);
	//blue 0 ~ 255
	var b = Math.floor(Math.random()*256);


	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function resetEasy(){

	//generate random  3 colors
	colors = generateColors(numSquares);
	//generate picked color
	pickedColor = pickColor(numSquares);
	//Change display of picked color
	colorDisplay.textContent = pickedColor; 
	//reset h1 background
	h1.style.background = "steelblue";

	

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

}

function reset(){

	//generate random color
	colors = generateColors(numSquares);
	//generate picked color
	pickedColor = pickColor(numSquares);
	//Change display of picked color
	colorDisplay.textContent = pickedColor; 
	//reset h1 background
	h1.style.background = "steelblue";
	//reset textcontent of button
	resetButton.textContent = "New Color";

	

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}

	setColor();



}