## FrogJmp
[Question](https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/)

## Solution
```java
class Solution {
    public int solution(int X, int Y, int D) {
        int n = (Y-X)%D;
        if(n==0) {
            n = (Y-X)/D;
        } else {
            n = (Y-X)/D + 1;
        }
        return n;
    }
}
// Solution complexity = O(1)
```
