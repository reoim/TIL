# Exceptions
Exception is a problem that arises during execution of a problem. It occurs when the normal flow of the program is disrupted or the program is terminated abnormally. So it must be handled.

## How to catch exepctions
**try catch**

```java
try {
   // Protected code
}catch(ExceptionName e1) {
   // Catch block
}
```


**try catch finally**
```java
try {
   // Protected code
}catch(ExceptionType1 e1) {
   // Catch block
}catch(ExceptionType2 e2) {
   // Catch block
}catch(ExceptionType3 e3) {
   // Catch block
}finally {
   // The finally block always executes.
}
```

The `finally` block always executes, irrespective of occurence of an Exception.


## When I should use the finally block
Use when you use any resource like streams, connections, etc. We have to close them explicitly using finally block.

# Reference
[Tutorialspoint: Java](https://www.tutorialspoint.com/java/java_exceptions.htm)
