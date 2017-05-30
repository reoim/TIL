### XML Parsing
XML 문서를 통해 데이터에 접근하고 수정하는 것을 말함

### XML Parser
`XML Parser` 는 어떻게 XML 문서의 데이터에 접근하고 수정하는지에 따라 다음과 같이 분류된다.

* **Dom Parser** - Parses the document by loading the complete contents of the document and creating its complete hiearchical tree in memory.

* **SAX Parser** - Parses the document on event based triggers. Does not load the complete document into the memory.

* **JDOM Parser** - Parses the document in similar fashion to DOM parser but in more easier way.

* **StAX Parser** - Parses the document in similar fashion to SAX parser but in more efficient way.

* **XPath Parser** - Parses the XML based on expression and is used extensively in conjuction with XSLT.

* **DOM4J Parser** - A java library to parse XML, XPath and XSLT using Java Collections Framework , provides support for DOM, SAX and JAXP.



