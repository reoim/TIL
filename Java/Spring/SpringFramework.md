

# Spring Framework?
It is java based framework. It provides `container` that supports IoC(Inversion of Control).

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



## Dependency Injection(DI)
When we create complex java application, we should make application class as independent as possible in order to increase reuseablility and to test them independently while unit testing. `DI` helps in gluing these classes together and also keep them independently at the same time. 

## How to setup?

## [Bean life cycle](https://www.tutorialspoint.com/spring/spring_bean_life_cycle.htm)

# Reference
[Tutorials point: Spring core basic](https://www.tutorialspoint.com/spring/index.htm)
[Java T Point: Spring](https://www.javatpoint.com/spring-tutorial)
