## Insert subquery values
Subqueries are not allowed in (INSERT INTO ... VALUES...) context. Only scalar expressions are allowed.

In order to use subquery, use (INSERT INTO ... SELECT) instead.

e.g>
```
INSERT INTO tableName(ID, column1)
SELECT
	NEWID(),
	(SELECT TOP 1 columnName
	FROM otherTable
	WHERE (condition..)
	
```
----

## Subquery returned more than 1 value
This is not permitted when the subquery follows =, !=, <, <= , >, >= or when the subquery is used as an expression. 

e.g> Following SQL query doesn't work
```
INSERT INTO table(ID, column1, column2)
SELECT
	NEWID(),
	(SELECT column3
	FROM otherTable
	WHERE column3 = 'value'), 'test'
```
Because the subquery returns multiple values and it try to insert multiple value into 1 row. The query should be changed like this. 

```
INSERT INTO table(ID, column1, column2)
SELECT NEWID(),column3, 'test'
FROM otherTable
WHERE column3 = 'value'
```
In this case, I can insert multiple value from subquery with new unique ID and 'test' value to column2.

----

## SELECT DISTINCT comparability
**SELECT DISTINCT statement** is to return only different value when there are duplicated values in a column.
```
SELECT DISTINCT column_name,column_name
FROM table_name;
```
**Comparability error**

**Text / nText / image** data type cannot be selected as **DISTINCT** because it is not comparable.
```
SELECT DISTINCT CAST(Description as TEXT)
FROM PRODUCTS
```
Cannot cast Description column as text when use **DISTINCT**.

It will get following error message.
```
Msg 421, Level 16, State 1, Line 1
The text data type cannot be selected as DISTINCT because it is not comparable.
```
Use varchar(max) instead of text.
```
SELECT DISTINCT CAST(Description as varchar(50))
FROM PRODUCTS
```

----

## Put column name to CAST

Following sql returns values without column name.
```
SELECT CAST(column1 as varchar(50))
FROM table1
```
Add **'as columnName'** after **')'**
```
SELECT CAST(column1 as varchar(50)) as columnName
FROM table1
```

----

## Return row number for each row

Example code
```
USE AdventureWorks2012;   
GO  
SELECT ROW_NUMBER() OVER(ORDER BY SalesYTD DESC) AS Row,   
    FirstName, LastName, ROUND(SalesYTD,2,1) AS "Sales YTD"   
FROM Sales.vSalesPerson  
WHERE TerritoryName IS NOT NULL AND SalesYTD <> 0;  
```

Result
```
Row FirstName    LastName               SalesYTD  
--- -----------  ---------------------- -----------------  
1   Linda        Mitchell               4251368.54  
2   Jae          Pak                    4116871.22  
3   Michael      Blythe                 3763178.17  
4   Jillian      Carson                 3189418.36  
5   Ranjit       Varkey Chudukatil      3121616.32  
6   José         Saraiva                2604540.71  
7   Shu          Ito                    2458535.61  
8   Tsvi         Reiter                 2315185.61  
9   Rachel       Valdez                 1827066.71  
10  Tete         Mensa-Annan            1576562.19  
11  David        Campbell               1573012.93  
12  Garrett      Vargas                 1453719.46  
13  Lynn         Tsoflias               1421810.92  
14  Pamela       Ansman-Wolfe           1352577.13  
```

----

## SELECT * does not work on mssql

```
select * from table //error

select column1, column2 from table //works fine
```
It happens when MSSQL table has **TEXT** type column and blank string in it.

#### How to solve the problem?
* Change the datatype of that column to varchar 
* Reset the value of the column from blank string to NULL
* Select only necessary columns

----

## SELECT TEXT type with blank string
Similar issue with above one. You can not select text type column with balnk string in it.

In this case, Change data type or Cast it as varchar.
```
select CAST(column1 as varchar(50)) from table
```
