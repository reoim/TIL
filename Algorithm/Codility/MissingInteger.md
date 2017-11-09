## MissingInteger
[Question](https://codility.com/programmers/lessons/4-counting_elements/missing_integer/)

## Solution
Java
```java
import java.util.*;

class Solution {
    public int solution(int[] A) {
        int num = 1;
        HashSet<Integer> hs = new HashSet<Integer>();
        for(int i=0; i<A.length; i++){
            hs.add(A[i]);
        }
        while(hs.contains(num)) {
             num++;
        }
        return num;
    }
}
```

Python
```python

```
