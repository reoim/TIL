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


### Streaming vs DOM
일반적으로 XML 정보로 프로그래밍 하는 방법은 두가지로 나뉜다. `streaming`과 `document object model(DOM)`.

`DOM` 모델은 document 전체 tree에 해당하는 objects를 메모리에 생성하고 document의 모든 content를 로딩한다. DOM tree는 자유롭게 네비게이팅이 가능하고 랜덤한 접근이 가능해서 유연성이 뛰어나지만 메모리를 너무 많이 사용한다. document를 processing 하는 동안 전체 document tree가 object 형태로 존재해야 하기 때문에 대용량의 XML을 처리하기 너무 부담스럽다.

`Streaming` 모델은 XML의 정보셋을 runtime이나 realtime으로 dynamic하게 전송하고 파싱한다. Output을 바로 바로 생성 가능하고 사용된 정보셋은 바로 garbage collected 된다. DOM 모델에 비해 매우 memory efficient 하다. 대신 데이터를 순차적으로 streaming 해서 바로바로 처리하므로 entire document tree를 메모리에 저장하는 DOM에 비해 정보셋에 대한 접근의 유연성이 떨어지는 것은 어쩔 수 없음.

### StAX Parser
`SAX`와 비슷하지만 `StAX Parser` 는 PULL API 라서 클라이언트에서 XML 정보가 필요할때마다 `StaX Parser`에게 요청하면 됨. `SAX Parser` 는 PUSH API 라서 클라이언트가 Parser로 부터 정보셋을 push 받았을 때만 정보를 얻을 수 있음. 또한 `StAX Parser`는 Read/Wirte, `SAX Parser`는 Read only.

* StAX 사용 하려면 application classpath에 stax.jar를 가지고 있어야 함

### StAX 단점
* XML 문서에 랜덤하게 접근 불가능. forward only.
* Parser가 접근하거나 수정한 데이터를 트랙킹 하려면 따로 데이터를 저장하는 코드를 직접 만들어줘야함

### StAX API
`StAX API`는 크게 두가지 API set 으로 나뉜다.

* **Cursor API** - XML 문서를 처음부터 시작해서 끝까지 살펴 볼 수 있는 `Cursor` 를 사용. 이 Cursor는 foward만 가능하고 backward 이동은 불가능함. 보통 한번에 한 element씩 처리함.

Cursor의 main interface 로는

`XMLStreamReader` 와 `XMLStreamWriter` 가 있음.

XMLStreamReader
```java
public interface XMLStreamReader {
    public int next() throws XMLStreamException;
    public boolean hasNext() throws XMLStreamException;

    public String getText();
    public String getLocalName();
    public String getNamespaceURI();
    // ... other methods not shown
}
```

XMLStreamWriter
```java
public interface XMLStreamWriter {
    public void writeStartElement(String localName) throws XMLStreamException;
    public void writeEndElement() throws XMLStreamException;
    public void writeCharacters(String text) throws XMLStreamException;
    // ... other methods not shown
}
```
* **Iterator API** - Event objects set의 형태로 XML document stream 을 나타냄. 

XMLEventReader
```java
public interface XMLEventReader extends Iterator {
    public XMLEvent nextEvent() throws XMLStreamException;
    public boolean hasNext();
    public XMLEvent peek() throws XMLStreamException;
    // ...
}
```

XMLEventWriter
```java
public interface XMLEventWriter {
    public void flush() throws XMLStreamException;
    public void close() throws XMLStreamException;
    public void add(XMLEvent e) throws XMLStreamException;
    public void add(Attribute attribute) throws XMLStreamException;
    // ...
}
```
