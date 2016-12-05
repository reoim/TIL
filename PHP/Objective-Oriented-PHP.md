## autoload
autoload file when class is instantiated
```php
spl_autoload_register(function($class_name){
    include $class_name . '.php';     
});
```

----

## class
Creating a subclass
```php
class SubClass extends SuperClass {
  // your code..
}
```

Creating an instance of class
```php
$instance = new ClassName();
```
Calling an instance's method
```php
$instance->methodName();
```


