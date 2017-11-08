## Odd Occurrences in Array
[Question](https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/)




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
