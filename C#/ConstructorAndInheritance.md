# Constructor Inheritance

- Base class constructors are always executed first
- Base class constructors are not inherited

ex>
```
public class Vehicle
{
  private readonly string _registrationNumber;
  public Vehicle(string registrationNumber)
  {
    _registrationNumber = registrationNumber;
  }
}

```
Following code won't work.
```
public class Car : Vehicle
{
  public Car(string registrationNumber)
  {
    _registrationNumber = registrationNumber;
    //Can't access to _registrationNumber
  }
}
```
Use the base keyword
```
public class Car : Vehicle
{
  public Car(string registrationNumber)
      : base(registrationNumber)
      {
        // Initialise fields specific to the Car class
      }
}
```
