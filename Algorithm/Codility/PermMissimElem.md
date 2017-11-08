## PermMissingElem
[Question](https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/)

## Solution

```java
class Solution {
    public int solution(int[] A) {
        long n = A.length + 1;
        long sum = n*(n+1)/2;
        for(int i : A) {
            sum -=i;
        }
        return (int)sum;
    }
}

// Solution complexity: O(N) or O(N * log(N))
```

## Note
* If declare variable as int, the performance score will be just 60% because of int overflowing issue. Use long instead.
* Used [partial sum fomular](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF). 1+2+3+4+5+..+n = n*(n+1)/2 
