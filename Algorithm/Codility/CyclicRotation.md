## CyclicRotation
[Question](https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/)

## Solution
```java
class Solution {
    public int[] solution(int[] A, int K) {
        int arrayLength = A.length;
        if (arrayLength == 0) {
            return A;
        } 
        int tmp = 0;
        for(int j = 0; j<K; j++) {
            tmp = A[arrayLength-1];
            for(int i = arrayLength-1; i>=0; i--) {
                if(i==0) {
                    A[i] = tmp;
                } else {
                    A[i] = A[i-1];
                }
            }
        }
        return A;
    }
}
```
