# String literal

### String objects are stored in a special memory are known as string constant pool

Each time you create a string literal, the JVM check the string constant pool first. If the string already exists in the pool, a reference to the pooled instance is returned. If string doesn't exist in the pool, a new string instance is created and placed in the pool. For example:

```java
String s1="Welcome";  
String s2="Welcome";//will not create new instance  
```

![string](images/string.png)

In the above exmaple only one object will be created. Firstly JVM will not find any string object with the value "Welcome" in string constant pool, so it will create a new object. After that it will find the string with the value "Welcome" in the pool, it will not create new object but will return the reference to the same instance.

# String, StringBuffer, StringBuilder

Java `String` is `immutable`. It cannot be changed. Meaning whenever we changed any string, a new instance is created. 
For `mutable` string, we use `StringBuffer` and `StringBuilder` class.

|            | **String** |  **StringBuffer**| **StringBuilder** |
|------------|-------------|------------|------------|
| **Storage Area**   | Constant String Pool |  Heap |    Heap 
| **Modifiable**     | No (immutable) | Yes( mutable ) | Yes( mutable )
| **Thread Safe**    | Yes      | Yes | No  
| **Performance**    | Fast      | Very slow   | Fast   



# Reference
[Java T point - String](https://www.javatpoint.com/java-string)