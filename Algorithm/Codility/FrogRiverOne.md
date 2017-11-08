## FromRiverOne
[Question](https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/)

## Solution
```java
class Solution {
    public int solution(int X, int[] A) {
        int[] checker = new int[X]; //if use new int[A.length], doesn't work in case of (5, [3])
        int sum = 0;
        long total = X*(X+1)/2;
        for(int i=0; i<A.length; i++) {
            if(checker[A[i]-1] != 1) { // if it is not repeted element
                checker[A[i]-1] = 1; 
                sum +=A[i];
            }
            if(sum == (int)total) {
                return i;
            }
        }
        return -1;
    }
}
```
