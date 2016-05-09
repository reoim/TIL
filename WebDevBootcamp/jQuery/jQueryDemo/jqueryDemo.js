//Select all divs and give them a purple backgorund
$("div").css("background", "purple");
//Select the divs with calss "highlight" and make them 200px wide
$(".highlight").css("width", "200px");
//Select the div with id "third" and give it a orange border
$("#third").css("border", "4px orange solid");
//Select the first div only and change its font color to pink
// document.querySelectorAll("div")[0].style.color="pink";
$("div:first-of-type").css("color", "pink");