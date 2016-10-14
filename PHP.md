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
