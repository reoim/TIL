var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");


var p1Score = 0;
var p2Score = 0;

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var gameOver = false;
var winningScore = 5;

var inputScore = document.querySelector("#inputNum");
var winningScoreDisplay = document.querySelector("#winScore");





p1Button.addEventListener("click", function(){
	
	if(!gameOver){

	
		p1Score++;
		// console.log(p1Score, winningScore);

		if(p1Score === winningScore){
			gameOver = true;
			p1Display.style.color = "green";
		}

		p1Display.textContent = p1Score;

	}

	})


p2Button.addEventListener("click", function(){
	
	if(!gameOver){

		p2Score++;
		
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.style.color = "green";
		}

		p2Display.textContent = p2Score;

	}

})


function reset(){

	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
}

resetButton.addEventListener("click", function(){

	reset();

})


inputScore.addEventListener("change", function(){


	reset();
	winningScore = Number(inputScore.value); 
	//inputScore.value returns string value. So use Number(inputScore.value) to get number value.
	winningScoreDisplay.textContent = winningScore;

})