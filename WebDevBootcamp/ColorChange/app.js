var body = document.querySelector("body");
var button = document.querySelector("button");

//using document.body.style.background

// button.addEventListener("click", function(){

// 	if(isPurple){
// 		console.log("yes");
// 		document.body.style.background = "white"
// 		isPurple = false;
// 	} else {
// 		console.log("no");
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
// })

// Using classlist.toggle


button.addEventListener("click", function(){

body.classList.toggle("color-change");

})



