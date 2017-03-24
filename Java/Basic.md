## Data type in Java

## Autoboxing and unboxing

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


