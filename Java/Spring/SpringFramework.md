

# Spring Framework?
It is java based framework. It provides `container` that supports IoC(Inversion of Control).

## Java Bean vs Spring Bean

**Java Bean**: At a basic level, JavaBeans are simply Java classes which adhere to certain coding conventions. For example, classes that

Have a public default (no argument) constructor
allows access to properties using accessor (getter and setter) methods
Implement `java.io.Serializable`

**Spring Bean**: A Spring bean is basically an object managed by Spring. More specifically, it is an object that is instantiated, configured and otherwise **"managed by a Spring Framework container"**. Spring beans are defined in a Spring configuration file (or, more recently, by using annotations), instantiated by the Spring container, and then injected into your application.

Note that Spring Beans need not to be Java Beans always. Spring Beans may not implement `java.io.Serializable` Interface, **can have arguments in constructor** etc.

## IoC container
There are two type of IoC container.
* BeanFactory
```java
Resource resource=new ClassPathResource("applicationContext.xml");  
BeanFactory factory=new XmlBeanFactory(resource);  
```
* ApplicationContext
```java
ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");  
```

`ApplicationContext interface is built on top of the BeanFactory interface. It adds extra functionality than BeanFactory. So it is better to use ApplicationContext than BeanFactory.`

Main tasks of IoC container are :
* to instantiate the application class
* to configure the object
* to assemble the dependencies between the objects

### Application context
* ClassPathXmlApplicationContext - Loads a context definition from an XML file located in the classpath, treating context definition files as classpath resources.
* FileSystemXmlApplicationContext - Loads a context definition from an XML file in the file system.
* XMLWebApplicationContext - Loads context definition from an XML file contained within a web application.

## Dependency Injection(DI)
When we create complex java application, we should make application class as independent as possible in order to increase reuseablility and to test them independently while unit testing. `DI` helps in gluing these classes together and also keep them independently at the same time. 

## How to setup?

## [Bean life cycle](https://www.tutorialspoint.com/spring/spring_bean_life_cycle.htm)

# Reference
[Tutorials point: Spring core basic](https://www.tutorialspoint.com/spring/index.htm)

[Java T Point: Spring](https://www.javatpoint.com/spring-tutorial)

Spring in Action, 3rd Edition

[Difference between javabean and springbean](http://stackoverflow.com/questions/21866571/difference-javabean-and-spring-bean)


