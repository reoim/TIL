## JRE, Java Runtime Environment
`Java virtual machine` and `standard Java APIs` coming with `Java Standard Edition(Java SE)`.

The `JRE` contains enough to execute a Java application, but not to compile it.

## Java Software Development Kit, Java SDK
The Java Software Development Kit (Java SDK) is the JRE plus the Java compiler, and a set of other tools.

If you need to develop Java programs you need the full Java SDK. The JRE is not enough then. Only the full Java SDK contains the Java compiler which turns your .java source files into byte code .class files.

Additionally, some Java servers may need some of the tools in the JDK to e.g. compile JSPs (Java Server Pages) into Java byte code. In that case it is not enough to run the server with the JRE. You must use the full Java SDK so the server has the extra tools from the Java SDK available.

## Data type in Java

### Primitive Data Types

| **Data Type** |  **Size**| **Range** |
|------------|-------------|------------|
| **boolean**   | 1 bit	 |  True or False only |   
| **byte**     | 8 bit | -128 to 127 | 
| **char**     | 16 bit | 0 to 65,535 | 
| **short**    | 16 bit | -32,768 to 32,767 | 
| **int**    | 32 bit  | -2,147,483,648 to 2,147,483,647  |   
| **long**     | 64 bit | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 
| **float**     | 32 bit | 1.40129846432481707e-45 to 3.40282346638528860e+38 | 
| **double**     | 64 bit | 4.94065645841246544e-324d to 1.79769313486231570e+308d | 


## Autoboxing and unboxing
`Autoboxing` - Java compiler automatically converts a primitive value (an int, for example) into an object of the corresponding wrapper class (Integer).

`Unboxing` - The conversion goes the other way.

Autoboxing example
```java
List<Integer> li = new ArrayList<>();
for (int i = 1; i < 50; i += 2)
    li.add(i);
```


## Polymorphism
Polymorphism is the capability of a method to do different things based on the object that it is acting upon. 

In other words, polymorphism allows you define one interface and have multiple implementations.

## Overloading and Override

#### Overloading
* Happens at compile time
* Static method can be overloaded. Thus a class can have more than one static method with same name.
* Overloading is being done in the same class. 
* Static binding
* Better performance than Overriding. because it happens at compile time while overriding happens at runtime.
* private and final method can be overloaded.
* Argument list should be different.
* Return type does not matter.

Overlaoding example
```java
class Sum
{
    int add(int n1, int n2) 
    {
        return n1+n2;
    }
    int add(int n1, int n2, int n3) 
    {
        return n1+n2+n3;
    }
    int add(int n1, int n2, int n3, int n4) 
    {
        return n1+n2+n3+n4;
    }
}
```

#### Override
* Happens at runtime
* Static method cannot be overriden. Even if you declare a same static method in child class it has nothing to do with the same method of parent class.
* Overriding is just giving a specific implementation to the inherited method of parent class.
* Dynamic binding
* private and final method cannot be overrided.
* Argument list should be same.
* Return type does matter.

Override example
```java
class CarClass
{
    public int speedLimit() 
    {
        return 100;
    }
}
class Ford extends CarClass
{
    public int speedLimit()
    {
        return 150;
    }
    public static void main(String args[])
    {
    	CarClass obj = new Ford();
    	int num= obj.speedLimit();
    	System.out.println("Speed Limit is: "+num);
    }
}
```

## String, StringBuffer and String Builder

Java `String` is `immutable`. It cannot be changed. Meaning whenever we changed any string, a new instance is created. 
For `mutable` string, we use `StringBuffer` and `StringBuilder` class.

|            | **String** |  **StringBuffer**| **StringBuilder** |
|------------|-------------|------------|------------|
| **Storage Area**   | Constant String Pool |  Heap |    Heap 
| **Modifiable**     | No (immutable) | Yes( mutable ) | Yes( mutable )
| **Thread Safe**    | Yes      | Yes | No  
| **Performance**    | Fast      | Very slow   | Fast   


## Why Switch Case is faster than if/else statement

When the JVM encounters a tableswitch instruction, it can simply check to see if the key is within the range defined by low and high. If not, it takes the default branch offset. If so, it just subtracts low from key to get an offset into the list of branch offsets. In this manner, it can determine the appropriate branch offset without having to check each case value.

Note: When compare String with Switch case, it works as if use String.equals method. So it compare String value and it is case sensitive. 

# References
[Overloading/Override](http://beginnersbook.com/2014/01/difference-between-method-overloading-and-overriding-in-java/)

[Oracle Java tutorial](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)

[Jenkov java tutorial](http://tutorials.jenkov.com/java/what-is-java.html)

[Control Flow in the Java Virtual Machine](http://www.artima.com/underthehood/flowP.html)
