# ASP.NET Form
## View
```c#
@using (Html.BeginForm(“action”, “controller”))
{
  <div class="form-group">
    @Html.LabelFor(m => m.Name)
    @Html.TextBoxFor(m => m.Name,	new{ @class="form-control")
  </div>
  <button	type="submit"	class="btn btn-primary">Save</button>
}	
```

## Checkbox
```c#
<div class="checkbox">
  @Html.CheckBoxFor(m => m.IsSubscribed)Subscribed?
</div>	
```

## Drop-down list
```c#
@Html.DropDownListFor(m	=> m.TypeId, new SelectList(Model.Types, "Id", "Name"), "",	new	{	@class = "form-control"	}	
```

## Overriding label
```c#
Display(Name ="Date of Birth")
public DateTime? Birthdate { get; set; }	
```

## Saving Data
```c#
[HttpPost]
public ActionResult Save(Customer customer)
{
  if	(customer.Id == 0)
    _context.Customers.Add(customer); // add new data
	else	
	{	// update data
	  var	customerInDb = _context.Customers.Single(c.Id	== customer.Id);								
		//update	properties
	 }	
		_context.SaveChanges();
  return	RedirectToAction(“Index”,	“Customers”)
}	
```

## Hidden Fields
You can use it when updating data
```c#
@Html.HiddenFor(m	=> m.Customer.Id)
```


# Reference
[Programming with Mosh](http://programmingwithmosh.com/)
