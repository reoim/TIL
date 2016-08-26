Reference: [MSDN > C# Programming Guide > Delegates](https://msdn.microsoft.com/en-us/library/ms173172.aspx)

## Using Delegates
- delegate 는 C 와 C++ 의 function pointer 와 비슷한데 그것과 다르게 object-oriented, type safe and secure 하다. 선언은 다음과 같이.
```
public delegate void Del(string message);
```
- 예시코드
```
//Create a method for a delegate.
public static void DelegateMethod(string message)
{
  System.Console.writeLine(message);
}
```
```
// Instantiate the delegate.
Del handler = DelegateMethod;
```
```
// Call the delegate.
handler("Hello World");
```
