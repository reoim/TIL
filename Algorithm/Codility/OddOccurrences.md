## Odd Occurrences in Array
[Question](https://codesays.com/2014/solution-to-perm-check-by-codility/)




## Solution

```java
class Solution {
    public int solution(int[] A) {
        int solution = 0;
        for (int value: A)
          solution ^= value; //use bitwise XOR operator
        return solution;
    }
}
```
