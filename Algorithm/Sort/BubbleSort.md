
```python
  def bubble_sort(alist):
    for i in range(len(alist)-1):
      for j in range(len(alist)-1):
        if alist[j] > alist[j+1]:
          alist[j], alist[j+1] = alist[j+1], alist[j]
    return alist
```
