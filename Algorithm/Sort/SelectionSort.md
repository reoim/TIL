# Selection Sort

* Performance: O(n^2)
* Space complexity: O(n) total, O(1) auxiliary

Python
```python

def selection_sort(alist):
  for i in range(len(alist)-1):
    minVal = i
    j = i+1
    while j < len(alist):
      if alist[j] < alist[minVal]:
        minVal = j
        j = j+1
    if minval is not i:    
      alist[minVal], alist[i] = alist[i], alist[minVal]

```
