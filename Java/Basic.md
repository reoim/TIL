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
|            | **String** |  **StringBuffer**| **StringBuilder** |
|------------|-------------|------------|------------|
| **Storage Area**   | Constant String Pool |  Heap |    Heap 
| **Modifiable**     | No (immutable) | Yes( mutable ) | Yes( mutable )
| **Thread Safe**    | Yes      | Yes | No  
| **Performance**    | Fast      | Very slow   | Fast   





# References
[Overloading/Override](http://beginnersbook.com/2014/01/difference-between-method-overloading-and-overriding-in-java/)

[Oracle Java tutorial](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)
