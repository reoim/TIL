##Check and uncheck all checkbox
html
```html
<table border="1">
    <thead>
        <tr>
            <th>
                <input type="checkbox" id="allcb" name="allcb" />
            </th>
            <th>values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <input type="checkbox" id="cb1" name="cb1" />
            </td>
            <td>value1</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" id="cb2" name="cb2" />
            </td>
            <td>value2</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" id="cb3" name="cb3" />
            </td>
            <td>value3</td>
        </tr>
    </tbody>
</table>
```

js
```javascript
$('#allcb').change(function () {
    $('tbody tr td input[type="checkbox"]').prop('checked', $(this).prop('checked'));
});
```

----

## If checkbox is not checked

```javascript
$('#check').click(function() {
    if(!$(this).is(':checked')) {
        // Got unchecked, so something!!!
    }
});
```

----

## Uncheck radio or checkbox
```javascript
$(this).prop('checked', false);
// Note that the pre-jQuery 1.6 idiom was
// $(this).attr('checked', false);
```
or plain js
```javascript
this.checked = false;
```

----

## Reset Form field
jQuery doesn't have reset() method, but native javascript does. 

Convert jQuery element to a javascript object like this;
```javascript
$("#formId")[0].reset()
// or
$("#formId").get(0).reset()
```

----
## Reset input field when modal is closed
```javascript
<div class="modal..">
    
    ...
    
    //close button
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </button>
    
    ...
</div>

// Reset form when close modal
<script type="text/javascript">
      $('.modal').on('hidden.bs.modal', function(){
        $('.modal-custom-form').get(0).reset();
      });

//or like this

$( document ).ready(function() {
    $('#modalId').on('hidden.bs.modal', function () {
          $(this).removeData('bs.modal');
    });
});


</script>
    
    
    

```




----

## Getting all table cells' value
```javascript
var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
    $tds = $row.find("td");             // Finds all children <td> elements

$.each($tds, function() {               // Visits every single <td> element
    console.log($(this).text());        // Prints out the text within the <td>
});
```

----

## put selected elements into array
checkbox example
```javascript
var test = [];
$('.ch_custom:checked').each(function(){
    test.push($(this).val());
});
```
other example
```javascript
$('.myTerm').each(function(){
  subTerms = $(this).children();
});
```
or use **serializeArra()** if you want make object array
```javascript
var test = $('.ch_custom:checked').serializeArray();
```


## Midpend?? append, prepend
**prepend** attach tag before the selected element.

**append** attach tag after the selected elemnt.

What about **midpend????**

Use **insertAfter()**
```html
<select id="mySelect">
    <option class="target">1</option>
    <option>3</option>
</select>
```
use insertAfter
```javascript
$('<option>2</option>')insertAfter('.target');
```
result
```html
<select id="mySelect">
    <option class="target">1</option>
    <option>2</option>
    <option>3</option>
</select>
```

----

## .on() for dynamically created elements
To use jquery for dynamically elements that are added after event handler created. Need to use .on() properly.

ex>
```javascript
$('#staticSelector').on('click', '#dynamicSelector', fn);
```

The (now deprecated) .live() method worked by attaching all event handlers to the document object. 

Since the document object is an ancestor of every object in the document, they got delegated event handling that way. 

So, in the example above, these two are equivalent:

```javascript
$(document).on('click', '#dynamicSelector', fn);
$('#dynamicSelector').live('click', fn);
```

----

## Select only one checkbox
```javascript
$('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});
```
