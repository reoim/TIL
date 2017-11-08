## tuple in for loop
```python
mypairs = [(1,2),(3,4),(5,6)]

for tup1,tup2 in mypairs:
  print(tup2)
  pritn(tup1)
```
returns:
```
2
1
4
3
6
5
```

## range
``` python
range(5) # range(0,5)
list(range(0,5)) # [0,1,2,3,4]
list(range(0,20,2)) # [0,2,4,6,8,10,12,14,16,18]
```

## Filter & Lambda
filter
```python
mylist = [1,2,3,4,5,6,7,8]

def even_bool(num):
  return num%2 == 0
  
evens = filter(even_bool, mylist)
print(list(evens))
```

lambda
```python
mylist =[1,2,3,4,5,6,7,8]

evnes = filter(lambda num:num%2 == 0, mylist)
print(list(evens))
```
Both return:
```
[2,4,6,8]
```


## Slice notation

```python
a[start:end] # items start through end-1
a[start:]    # items start through the rest of the array
a[:end]      # items from the beginning through end-1
a[:]         # a copy of the whole array
a[start:end:step] # start through not past end, by step
a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items
```
