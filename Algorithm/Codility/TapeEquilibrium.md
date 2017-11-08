## TapeEquilibrium
[Question](https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/)

## Solution

```java
class Solution {
    public int solution(int[] A) {
        int[] aSumArray = new int[A.length];
        int aSum = 0;
        for(int i = 0; i<A.length; i++) {
            aSum = aSum + A[i];
            aSumArray[i] = aSum;
        }
        int minDiff = 1000*A.length;
        int diff = 1000*A.length;
        for(int i = 0; i<aSumArray.length-1; i++) {
            diff = Math.abs(aSumArray[i] - (aSumArray[aSumArray.length-1] - aSumArray[i]));
            if(diff < minDiff) {
                minDiff = diff;
            }
        }
        return minDiff;
    }
}
```
