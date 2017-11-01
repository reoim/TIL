# DB2 index issue
## Problem
Using Hibernate/JPA, it doesn't use DB index for `select` query when it doesn't have any `where` condition. 

### Solution
Temporary Solution: Added `WHERE 1=1` so it is always true `WHERE` condition. After added that condition, it used DB index as expected.

# ActiveMQ overhead issue
## Problem 
When enqueue over 1000 messages at once to active mq, it will has significant performance drop as queue overhead increased. 

## Solution
Ideal solution is to balance enqueue and dequeue speed. 

In my case was, trying to enqueue a big message file consist of 1000~3000 messages. The problem was we split messages and enqueue to the queue at once. 

Should split messages and save as tmp file and enqueue these file one by one with time delay, so it can balance out enqueue and dequeue speed.

Another solution is not to split the big messages file and enqueue as 1 for batch process. 

Seperate queue for different purpose. End user request and the big file for batch process should be handled by different queue. 
