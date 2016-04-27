function isEven(num) {

	if(num%2 === 0) {
		console.log("ture");
	} else {
		console.log("false");
	}

}

function factorial(n) {
	var result=1;
	for(var i = 1; i<=n; i++) {
		result = result*i;
	}
	return result;
}

function kebobToSnake(str) {
	
	var result = str.replace(/-/g, "_");
	return result;
}