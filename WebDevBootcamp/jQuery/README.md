#TIL: jQuery
Today I Learned Memo for jQuery



##jQueryEvent
#### on ()
In most cases, click() and on('click') will both get the job done. However, there is one key difference:
- click() only adds listeners for existing elements
- on() will add listeners for all potential future elements



##jQueryEffects
####fadeOut()
Difference between following code.

console.log excuted before fadeOut() completed.
<pre><code>
$("button").on("click", function(){
	$('div').fadeOut(1000);	
	console.log("Fade Completed!");
})
</code></pre>


Use callback, so console.log will excute when fadeOut completed.
<pre><code>
$("button").on("click", function(){
	$('div').fadeOut(1000, function(){
		console.log("Fade Completed!");
	});	
})
</code></pre>
