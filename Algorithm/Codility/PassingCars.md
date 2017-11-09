## PassingCars
[Question](https://codility.com/programmers/lessons/5-prefix_sums/passing_cars/)

## Solution
```java
class Solution {
    public int solution(int[] A) {
        int toEast = 0;
        int passing = 0;
        for(int i:A) {
            if(i==1){
                passing += toEast;
            } else {
                toEast++;
            }
        }
        if(passing > 1e9 || passing <0) return -1;
        else return passing;
    }
}
```
