## Difference between <%@ include %> and <jsp:include>

```jsp
<%@ include file="test.txt"%>
```
test.txt file will be added to JSP before complie so the file content will be regarded as part of original JSP. It is recommended to use for static content.


```jsp
<jsp:include page="test.txt"></jsp:include>
```
test.txt file will be loaded on runtime. Which means that when you refresh jsp page, it will load the test.txt file. So it is recommmended to use for dynamic content.
