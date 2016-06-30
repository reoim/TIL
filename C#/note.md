### Difference between signed and unsigned integer
#### byte 범위는 0 ~ 255 (2^8) 인데 왜 short 는 최대범위가 2^16 이 아닌 2^15 이고 int 는 2^32 아닌 2^31 인가?
<br>
For a signed integer one bit is used to indicate the sign - 1 for negative, zero for positive. Thus a 16 bit signed integer only has 15 bits for data whereas a 16 bit unsigned integer has all 16 bits available. This means unsigned integers can have a value twice as high as signed integers (but only positive values).
