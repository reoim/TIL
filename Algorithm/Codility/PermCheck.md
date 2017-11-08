## PermCheck
[Question](https://codility.com/programmers/lessons/4-counting_elements/perm_check/)

## Solution
[Java solution reference](https://codesays.com/2014/solution-to-perm-check-by-codility/)
```java
class Solution {
    public int solution(int[] A) {
        int[] checker = new int[A.length];
        for(int i=0;i<A.length; i++) {
            if(A[i] < 1 || A[i] > A.length) { // out of range
                return 0;
            } else if(checker[A[i]-1] ==1) { // second meet
                return 0;
            } else {
                checker[A[i] -1] = 1; // first meet
            }
        }
        return 1;
    }
}
```

Python
```python
```
