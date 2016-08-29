## Custom routing
예전 방식대로 라우팅 셋팅을 하려면 **RouteConfig.cs** 파일에 routes.MapRoute(..)를 추가해서 설정함. 추가할때 default 버젼의 윗줄에 추가. 


```C#
routes.MapRoute(
	"MoviesByReleaseDate",
	"movies/released/{year}/{month}",
	new { controller = "Movies", action = "ByReleaseDate" },
	new { year = @"\d{4}", month = @"\d{2}" });
```
위 경우와 같이 설정했을 경우 문제점은 MoviesController의 action 이름을 수정할 경우 route config 파일의 **action = "ByReleaseDate"** 요 부분도 수정된 이름에 맞게 고쳐줘야함. 

그래서 제공하는 것이 **MVC Attribute routing**.

**RouteConfig.cs** 파일 default 버젼 routes.MapRoute() 윗줄에 **routes.MapMvcAttributeRoutes();** 를 추가.

그리고 해당 controller의 ActionResult 코드 바로 윗줄에 다음과 같은 코드를 추가하면 된다.

```
// url: controller/action/{custom}/{custom}

[Route("movies/released/{year}/{month:regex(\\d{2}:range(1,12)}")]
```
뒤에 추가된 Constraints 같은 경우는 다음 링크를 참고.

[ASP.NET MVC Attribute Route Constraints](https://blogs.msdn.microsoft.com/webdev/2013/10/17/attribute-routing-in-asp-net-mvc-5/#route-constraints)