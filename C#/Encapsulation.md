## Property
> A class member that encapsulates a getter/setter for accessing a field

### Auto-implemented Properties
code snippet: prop + (tab) + (tab)
```
public class Person
{
  public DateTime Birthdate {get; set;}
}
```
If you wanna see what is going on under the hood
1. open Command Prompt under project folder
2. cd to ProjectName/bin/Debug
3. type "ildasm ProjectName.exe"

### private access modifier for setter
Make it readonly. So it cannot be modified. Create constructor to set value.
```
public class Person
{
  public DateTime Birthdate {get; private set;}

  public Person(DateTime birthdate)
  {
    Birthdate = birthdate;
  }
}
```
