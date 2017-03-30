# How to check if a `.jar` file is a `OSGI` bundle?
Look for the Bundle-SymbolicName header in the MANIFEST.MF. 
This is the only mandatory header in an OSGi bundle, at least since Release 4.0 of the OSGi specification. 
Therefore if the Bundle-SymbolicName header is defined, then the JAR is an OSGi bundle. If not, then it is just a JAR.

[stackoverflow](http://stackoverflow.com/questions/19455486/how-can-i-test-if-a-jar-is-an-osgi-jar)
