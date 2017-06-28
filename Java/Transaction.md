# @Transactional in Spring framework
## What is default setting for @Transactional annotation?
Propagation mode = REQUIRED

read-only flag = false

transaction isolation level = database default (usually READ_COMMITED)

** Transaction will not roll back on a checked exceoption **

## Most common pitfalls when use transaction
[Understanding transaction pitfalls - IBM developers](https://www.ibm.com/developerworks/library/j-ts1/)
