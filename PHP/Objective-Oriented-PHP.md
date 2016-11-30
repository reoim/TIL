## autoload
autoload file when class is instantiated
```php
spl_autoload_register(function($class_name){
    include $class_name . '.php';     
});
```
