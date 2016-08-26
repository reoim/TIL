Memo from [Mosh Hamedani](https://www.programmingwithmosh.com)



## Interfaces and Testability
- 클래스 유닛테스트를 하려면 클래스를 isolate 시켜야함. 다른 클래스들은 다 정상적으로 작동한다고 가정하고 테스트 대상이 되는 클래스만 작동하는지 테스트.
- 문제는 테스트 대상이 되는 클래스가 다른 클래스에게 의존적일 경우 isolate 가 힘듬.
- 요때 interface를 사용하면 좋음.

```
public class OrderProcessor
{
  private readonly IshippingCalculator _calculator;

  public Customer(IShippingCalculator calculator)
  {
    _calculator = calculator;
  }

  ...

}
```
- 위 코드를 보면 OrderProcessor는 ShippingCalculator에 의존하지 않음. Interface(IShippingCalculator)에 의존함. ShippingCalculator 안에 메소드를 바꾸거나 추가하더라도 Interface만 동일하면 OrderProcessor에 영향을 주지않음.

## Interface and Extensibility
- Interface를 사용하면 어플 기능이 바뀔때마다 코드를 고치는대신 새로운 기능의 클래스 추가로 확장이 가능함.
- class가 interface에 의존할 경우, 런타임시 interface의 다른 implementation을 제공 가능함.
- [예시코드](https://github.com/reoim/Csharp/tree/master/InterfaceExtensibility)
