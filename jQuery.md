##Check and uncheck all checkbox
html
```
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
```
$('#allcb').change(function () {
    $('tbody tr td input[type="checkbox"]').prop('checked', $(this).prop('checked'));
});
```

----

## Reset Form field
jQuery doesn't have reset() method, but native javascript does. 

Convert jQuery element to a javascript object like this;
```
$("#formId")[0].reset()
// or
$("#formId").get(0).reset()
```

----
## Reset input field when modal is closed
```
<div class="modal ...>
    
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
