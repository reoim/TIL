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
