# Version check
1. create version.php and save following code

	For simple version check,
	```
	<?php
	echo 'Current PHP version: ' . phpversion();
	?>
	```

	For detailed report, (can check **memory limit** as well)
	```
	<?php
	phpinfo();
	?>
	```

2. Upload the file to server using FTP client or server's admin control panel
3. Open the file on web browser

----


## Debug
### Display error
Display errors could be turned off in **php.ini** or Apach config file.

Turn it on in the script like this:
```
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
```


----


## Get value from select box without submit button
Need to use ajax/jquery to get value from select box. 

PHP page already loaded so need to reload page to pass variable to php $_GET['']

ex>php
```
<?php
	if (isset($_GET['limit'])) {
		$limit = $_GET['limit'];
	      } else {
		$limit = 10; //default number of items per page
	      }
?>

...
...

<select id="items">
	<option value="" selected disabled>Show up to</option>
	<option value="10">10 items</option>
	<option value="25">25 items</option>
	<option value="50">50 items</option>
	<option value="100">100 items</option>
</select>

<script type="text/javascript">
	$('#items').change(function(){
	window.location = "(mydomain address)?limit="+ $(this).val();
	});
</script>
```
