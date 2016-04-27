var input = prompt("What would you like to do?");
var todo = [];

while(input!=="quit"){
	if(input === "new"){
		var newTodo = prompt("What do you want to add to your list?");
		todo.push(newTodo);
	} else if(input === "list") {
		console.log(todo);
	} else if(input === "delete") {
		todo.pop();
	} else {
		console.log("Please type either new or list");
	}

	var input = prompt("What would you like to do?");
}
console.log("See you next time");
