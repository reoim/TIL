# Insertion Sort

* Performance: O(n^2)

Python
```python

def insertion_sort(arr):
  for index in range(1, len(arr)):
    currentVal = arr[index]
    position = index
    
    while position >0 and arr[position-1] > currentVal:
      arr[position] = arr[position -1]
      position = position -1
    
    arr[position] = currentVal  

```
