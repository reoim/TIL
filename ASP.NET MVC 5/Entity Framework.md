## Migrations
In package manage console,
```
add-migration <name>
add-migration <name> -force //to overwrite the last migration
update-database
```

## Seeding the Database
Do not insert default data into database directly. 

Create a new empty migration and use the SQL method

So the data can be consistent when you deploy it. 

In this case, user membership types are only 4 and they are always consistent. 

ex>
```c#
namespace ProductManagement.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PopulateMembershipType : DbMigration
    {
        public override void Up()
        {
            Sql("INSERT INTO MembershipTypes (Id, SignUpFee, DurationInMonths, DiscountRate) VALUES(1, 0, 0, 0)");
            Sql("INSERT INTO MembershipTypes (Id, SignUpFee, DurationInMonths, DiscountRate) VALUES(2, 30, 1, 10)");
            Sql("INSERT INTO MembershipTypes (Id, SignUpFee, DurationInMonths, DiscountRate) VALUES(3, 90, 3, 15)");
            Sql("INSERT INTO MembershipTypes (Id, SignUpFee, DurationInMonths, DiscountRate) VALUES(4, 300, 12, 20)");
        }
        
        public override void Down()
        {
        }
    }
```

## Overriding Conventions

In the case of Code-first migration, String type property will be converted to nullable nvarchar(max) type column.

You can override column property like this.
```c#
[Required]
[StringLength(255)]
public string Name {get; set;}

// it will change the 'Name' column as nvarchar(255) and not nullable 
```

## Querying Objects
* Add DbSet in ApplicationDbContext in IdentityModels.cs file

In this case, if the Customer class is not referenced by DbContext, it won't be included in migrations.
```c#
public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Customer> Customers { get; set; }
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
```

* We need DbContext to access database. `private	ApplicationDbContext	_context;`

* And initialize it in the constructor. 

* This DbContext is disposable object. So dispose it properly.

```c#
public	class	MoviesController	
{
				private	ApplicationDbContext	_context; //DbContext to access database
				
        // initialize it in the constructor
        public	MoviesController()
				{
								_context	=	new	ApplicationDbContext();
				}
        
        // Dispose it
				protected	override	Dispose()
				{
								_context.Dispose();
				}
				public	ActionResult	Index()	
				{
									var	movies	=	_context.Movies.ToList();
									…		
				}
}	
```

## LINQ Extension Methods
```c#
_context.Movies.Where(m	=>	m.GenreId	==	1)
_context.Movies.Single(m	=>	m.Id	==	1);
_context.Movies.SingleOrDefault(m	=>	m.Id	==	1);
_context.Movies.ToList();	
```

## Eager Loading
A query for one type of entity also loads related entities as part of the query

```c#
// need to add
// using System.Data.Entity;

_context.Movies.Include(m	=>	m.Genre);
```

ex> Quries below will load blogs and all the posts related to each blog [Reference](https://msdn.microsoft.com/en-us/library/jj574232(v=vs.113).aspx)
```c#
using (var context = new BloggingContext()) 
{ 
    // Load all blogs and related posts 
    var blogs1 = context.Blogs 
                          .Include(b => b.Posts) 
                          .ToList(); 
 
    // Load one blogs and its related posts 
    var blog1 = context.Blogs 
                        .Where(b => b.Name == "ADO.NET Blog") 
                        .Include(b => b.Posts) 
                        .FirstOrDefault(); 
 
    // Load all blogs and related posts  
    // using a string to specify the relationship 
    var blogs2 = context.Blogs 
                          .Include("Posts") 
                          .ToList(); 
 
    // Load one blog and its related posts  
    // using a string to specify the relationship 
    var blog2 = context.Blogs 
                        .Where(b => b.Name == "ADO.NET Blog") 
                        .Include("Posts") 
                        .FirstOrDefault(); 
}
```

# Reference
[Programming with Mosh](http://programmingwithmosh.com/)
