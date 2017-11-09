## MaxCounters
[Question](https://codility.com/programmers/lessons/4-counting_elements/max_counters/)

## Solution
Java
```java
class Solution {
    public int[] solution(int N, int[] A) {
        int[] counter = new int[N];
        int[] resetCounter = new int[N];
        int biggestCount = 0;
        int max = 0;
        for(int i: A) {
            if(i<=N && i>=1) {
                counter[i-1]++;
                if(counter[i-1] + max > biggestCount) { // Need to keep that biggest count in case we meet N+1 and update max value later.
                    biggestCount = counter[i-1] + max;
                }
            }else if(i==N+1){
                if(biggestCount > max) {
                    max = biggestCount;
                    System.arraycopy(resetCounter, 0, counter, 0, N); // Reset counter array
                }
            }
        }
        for(int j=0; j<N; j++){ // Add max value to all elements since we reset the array when we updated max value.
            counter[j] += max; 
        }
        return counter;
    }
}
```
