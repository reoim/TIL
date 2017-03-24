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

#### Override
* Happens at runtime
* Static method cannot be overriden. Even if you declare a same static method in child class it has nothing to do with the same method of parent class.
* Overriding is just giving a specific implementation to the inherited method of parent class.
* Dynamic binding
* private and final method cannot be overrided.
* Argument list should be same.
* Return type does matter.

## String, StringBuffer and String Builder
|            | **String** |  **StringBuffer**| **StringBuilder** |
|------------|-------------|------------|------------|
| **Storage Area**   | Constant String Pool |  Heap |    Heap 
| **Modifiable**     | No (immutable) | Yes( mutable ) | Yes( mutable )
| **Thread Safe**    | Yes      | Yes | No  
| **Performance**    | Fast      | Very slow   | Fast   


