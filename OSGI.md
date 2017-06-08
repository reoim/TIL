## How to check if a `.jar` file is a `OSGI` bundle?
Look for the Bundle-SymbolicName header in the MANIFEST.MF. 
This is the only mandatory header in an OSGi bundle, at least since Release 4.0 of the OSGi specification. 
Therefore if the Bundle-SymbolicName header is defined, then the JAR is an OSGi bundle. If not, then it is just a JAR.

[stackoverflow](http://stackoverflow.com/questions/19455486/how-can-i-test-if-a-jar-is-an-osgi-jar)

## Create OSGI bundle from jar file
[Read this article](http://spring.io/blog/2008/02/18/creating-osgi-bundles/)

## Create DataSource config
### Installation in karaf
Create config in etc/org.ops4j.datasource-test.cfg:
```terminal
osgi.jdbc.driver.name=H2
databaseName=test
user=sa
password=
dataSourceName=testds-h2
```

Install
```terminal
feature:repo-add mvn:org.ops4j.pax.jdbc/pax-jdbc-features/1.1.0/xml/features
feature:install pax-jdbc-h2 pax-jdbc-config
```

Generated DataSrouce will look like this
```terminal
karaf@root()> service:list javax.sql.DataSource
[javax.sql.DataSource]
----------------------
 dataSourceName = test2
 service.factoryPid = org.ops4j.datasource
 databaseName = test
 user = sa
 osgi.jdbc.driver.name = H2
 osgi.jndi.service.name = test2
 felix.fileinstall.filename = file:/.../etc/org.ops4j.datasource-test2.cfg
 service.pid = org.ops4j.datasource.b1809982-d20a-4b84-b48c-ad23bbafb9ec
 password =
 service.id = 679
Provided by :
 OPS4J Pax JDBC Config (72)
 ```
 
 
