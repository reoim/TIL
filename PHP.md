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




## Debug
### Display error
Display errors could be turned off in **php.ini** or Apach config file.

Turn it on in the script like this:
```
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
```
