

## Submit button outside of form
Can use **form** attribute in HTML 5.
```html
<form id="myform" method="get" action="something.php">
    <input type="text" name="name" />
</form>

<input type="submit" form="myform" />
```

Similarly, hide submit button and use **label** with **for** attribute to submit the form 
```html
<form method="get" action="something.php">
     <input type="text" name="name" />
     <input type="submit" id="submit-form" class="hidden" />
</form>

<label for="submit-form">Submit</label>
```

----

## checkbox outside of form
Checkbox also can use **form** attribute.
```html
<input type="checkbox" form="myForm">

<form name="myForm" action="index.php" method="get">
    <input type="text">
    <button type="submit">submit</button>
</form>
```
