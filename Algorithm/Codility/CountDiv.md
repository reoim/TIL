## CountDv
[Question](https://codility.com/programmers/lessons/5-prefix_sums/count_div/)

## Solution
```java
class Solution {
    public int solution(int A, int B, int K) {
        int answer = B/K - A/K;
        if(A%K==0){
            answer++;
        }
        return answer;
    }
}
```
