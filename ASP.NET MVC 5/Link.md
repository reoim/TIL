# Link 만드는 법
그냥 간단하게 html 문법으로

```
<a href="/Movies/Index">View Movies</a>
```
이렇게 만들수도 있지만 아래와 같이 HtmlHelper 클래스의 ActionLink 를 이용해서 만들수도 있음.

```
@Html.ActionLink("View Movies", "Index", "Movies")
```
View Movies를 클릭하면 Movies/Index 로 이동.

해당 액션에 parameter를 전달하고 싶다면, 예를들어

**/movies/index/1**

요런 링크를 생성하려면

```
@Html.ActionLink("View Movies", "Index", "Movies", new { id = 1 }, null)
```
이런식으로 parameter를 전달할 수 있음.
