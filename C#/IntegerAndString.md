### Difference between signed and unsigned integer
> #### byte 범위는 0 ~ 255 (2^8) 인데 왜 short 는 최대범위가 2^16 이 아닌 2^15 이고 int 는 2^32 아닌 2^31 인가?
<br>
> For a signed integer one bit is used to indicate the sign - 1 for negative, zero for positive. Thus a 16 bit signed integer only has 15 bits for data whereas a 16 bit unsigned integer has all 16 bits available. This means unsigned integers can have a value twice as high as signed integers (but only positive values).


# String
** String is immutable **
### Formatting
```
ToLower()
ToUpper()
Trim()
```
### Searching
```
IndexOf('a')
LastIndexOf("Hello")
```
### Substrings
```
Substring(startIndex)
Substrings(startIndex, length)
```
### Replacing
```
Replace('a ', '!')
Replace("reo", "dongmin")
```
### Null Checking
```
String.IsNullOrEmpty(str)
String.IsNullOrWhiteSpace(str)
```
### Splitting
```
str.Split(' ')
```
### Converting Strings to Numbers
```
string s = "1234";
int i  = int.Parse(s);
int j = Convert.ToInt32(s);
```
### Converting Numbers to Substrings
```
int i = 1234;
string s = i.ToString();      // "1234"
string t = i.ToString("C");   // "$1,234.00"
string t = i.ToString("C0");  // "$1,234"
```
### Format Substrings
| **Format Specifier** | **Description** | **Example** |
|---------------------|------------------|-------------|
|**c** or **C**| Currency | 123456(C) -> $123,456|
|**d** or **D**| Decimal | 1234(D6) -> 001234|
|**e** or **E**| Exponential | 1052.0329112756(E) -> 1.052033E + 003|
|**f** or **F**| Fixed Point | 1234.567(F1) -> 1234.5|
|**x** or **X**| Hexadecimal | 255(X) -> FF|


# StringBuilder
- Defiend in System.Text
- A mutable string
- Easy and fast to create and manipulate strings

> ** Searching 기능 사용불가 **
> - IndexOf()
> - LastIndexOf()
> - Contains()
> - StartsWith()
> - ... 요것들은  String 만 사용가능<br>

> ** 대신  String Manipulation Methods  사용가능 **
> - Append()
> - Insert()
> - Remove()
> - Replace()
> - Clear()
