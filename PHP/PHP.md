# Version check
1. create version.php and save following code

	For simple version check,
	```php
	<?php
	echo 'Current PHP version: ' . phpversion();
	?>
	```

	For detailed report, (can check `memory limit` as well)
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
Display errors could be turned off in `php.ini` or Apach config file.

Turn it on in the script like this:
```php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
```


----





## Get value from select box without submit button
Need to use ajax/jquery to get value from select box. 

PHP page already loaded so need to reload page to pass variable to php $_GET['']

ex>php
```php
<?php
	if (isset($_GET['limit'])) {
		$limit = $_GET['limit'];
	      } else {
		$limit = 10; //default number of items per page
	      }
?>

...
...php

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


----
## Form security
Reference from W3SCHOOL : [Original link](http://www.w3schools.com/php/php_form_validation.asp)

The $_SERVER["PHP_SELF"] variable can be used by hackers!

If PHP_SELF is used in your page then a user can enter a slash (/) and then some Cross Site Scripting (XSS) commands to execute.

**Cross-site scripting (XSS) is a type of computer security vulnerability typically found in Web applications. XSS enables attackers to inject client-side script into Web pages viewed by other users.**

Assume we have the following form in a page named "test_form.php":
```
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
```
Now, if a user enters the normal URL in the address bar like "http://www.example.com/test_form.php", the above code will be translated to:
```
<form method="post" action="test_form.php">
```
So far, so good.

However, consider that a user enters the following URL in the address bar:

http://www.example.com/test_form.php/%22%3E%3Cscript%3Ealert('hacked')%3C/script%3E
In this case, the above code will be translated to:
```
<form method="post" action="test_form.php/"><script>alert('hacked')</script>
```
This code adds a script tag and an alert command. And when the page loads, the JavaScript code will be executed (the user will see an alert box). This is just a simple and harmless example how the PHP_SELF variable can be exploited.

Be aware of that any JavaScript code can be added inside the script tag! A hacker can redirect the user to a file on another server, and that file can hold malicious code that can alter the global variables or submit the form to another address to save the user data, for example.

### How To Avoid $_SERVER["PHP_SELF"] Exploits?
$_SERVER["PHP_SELF"] exploits can be avoided by using the htmlspecialchars() function.

The form code should look like this:
```
<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
```
The htmlspecialchars() function converts special characters to HTML entities. Now if the user tries to exploit the PHP_SELF variable, it will result in the following output:
```
<form method="post" action="test_form.php/&quot;&gt;&lt;script&gt;alert('hacked')&lt;/script&gt;">
```
The exploit attempt fails, and no harm is done!!


### clean user input to prevent sql injection
```php
$fname = trim($_POST['signup-Fname']);
$fname = strip_tags($fname);
$fname = htmlspecialchars($fname);
```
----


## Prevent confirm form resubmission

### Post-Redirect-Get (PRG)
sample code
```php
if ($_POST) {
   // Execute code (such as database updates) here.

   // Redirect to this page.
   header("Location: " . $_SERVER['REQUEST_URI']);
   exit();
}
```


----



