var movies = 
[	{
	name: "catch1",
	star: 1,
	haveWatched: true 
	},
	
	{
	name: "catch2",
	star: 2,
	haveWatched: false
	},

	{
	name: "catch3",
	star: 3,
	haveWatched: false
	}

];


var myForEach = function(arr, fuc){
	for(i=0; i<arr.length; i++){
		fuc(arr[i]);
	}
}



myForEach(movies, function(){
	if(movies[i].haveWatched === true){
		console.log("I have watched "+movies[i].name + " " + movies[i].star + " star.");
	} else {
		console.log("I have not watched " +movies[i].name + " " + movies[i].star + " star.");
	}
});