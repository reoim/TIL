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
