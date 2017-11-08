## BinaryGap
[Question](https://codility.com/programmers/lessons/1-iterations/binary_gap/)

## Solution
```java
class Solution {
    public int solution(int N) {
        int maxGap =0;
        int binaryGap =0;
        while(N%2==0) {
            N/=2;
        }
        while(N > 0) {
            if(N%2==0) {
                binaryGap++;
            }else {
                if(maxGap < binaryGap) {
                    maxGap = binaryGap;
                }
                binaryGap = 0;
            }
            N/=2;
        }
        return maxGap;
    }
}
```
