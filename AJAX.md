## Delete rows from DB using AJAX

Using jQuery and AJAX to delete data can have better performance for client side. Because unlike PHP, it does not need to refreash all page.

I can just send request and when the request success, just change or remove a particular element on DOM.
```javascript
 $(".someclass").click(function(){
   var del_id = $(this).attr('id');
   var row = $(this).closest("tr"); //grab the row

   $.ajax({
            type:'POST',
            url:'ajax-delete.php',
            data: {delete_id : del_id},
            success:function(data) {
                if(data == "YES") {
                   row.fadeOut(500).remove();
                } 
                else {

                }   
            }
    });
```
