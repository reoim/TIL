## Data Annotations
* [Required]
* [StringLength(255)]
* [Range(1, 10)]
* [Compare("OtherProperty")]
* [Phone]
* [EmailAddress]
* [Url]
* [RegularExpression("...")]

## Adding Validation
Decorate properties of the model with `data annotations`. Then, in the controller:
```
if(!ModelStatle.IsValid)
  return View(...);
```
And in the view:
```
@Html.ValidationmessageFor(m => m.Name)
```

## Styling Validation Errors
In site.css:
```
.input-validation-error {
  color: red;
}
 
.filed-validation-error {
  border: 2px solid red;
}
```

## Custom Validation
```
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProductManagement.Models
{
    
    public class Min18YearsIfAMember : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var customer = (Customer)validationContext.ObjectInstance;

            if(customer.MembershipTypeId == MembershipType.Unknown || customer.MembershipTypeId == MembershipType.PayAsYouGo)
                return ValidationResult.Success;
            
            if(customer.BirthDate == null)
                return new ValidationResult("Birthdate is required.");

            var age = DateTime.Today.Year - customer.BirthDate.Value.Year;

            return (age >= 18)
                       ? ValidationResult.Success
                       : new ValidationResult("Customer should be at least 18 years old to go on a membership.");
        }
    }
}
```

## Validation Summary
```
@Html.ValidationSummary(true, "Please fix the following errors");
```

## Client-side Validation
```
@section scripts {
  @Script.Render("~/bundles/jqueryval")
}
```


## Anti-forgery Tokens
Use `Anti-forgery Tokens` to prevent `Cross-Site Request Forgery(CSRF)`.

In the view:
```
@Html.AntiForgeryToken()
```
In the controller:
```
[ValidateAntiForgeryToken]
public ActionResult Save() {}
```
