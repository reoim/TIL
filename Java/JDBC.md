# Frequent Mistakes
## Close reslut set and statement explicitly. 
Don't count on connection.close(). There is a chance that the connection can be returned to database pool after calling connection.close(). And ResultSet/Statement will never be closed.

In addition, ResultSet will not be garbage colleced even if it becomes `null`. So it must be closed explicitly. 

