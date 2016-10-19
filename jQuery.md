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
