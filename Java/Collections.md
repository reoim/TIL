## ArrayList
* Can contain duplicate elements
* Maintains insertion order
* Non synchronized
* Index basis. Allows random access
* Manipulation is slow because a lot of shifting needs to be occurred if any element is removed from the array list

## LinkedList
* Can contain duplicate elements.
* Maintains insertion order.
* Non synchronized.
* Manipulation is fast because no shifting needs to be occurred.
* Can be used as list, stack or queue.

## ArrayList VS LinkedList
| **ArrayList** | **LinkedList** |
|------------|-------------|
| ArrayList internally uses dynamic array to store the elements      | LinkedList internally uses doubly linked list to store the elements       | 
| Manipulation with ArrayList is slow because it internally uses array. If any element is removed from the array, all the bits are shifted in memory     | Manipulation with LinkedList is faster than ArrayList because it uses doubly linked list so no bit shifting is required in memory       | 
| ArrayList class can act as a list only because it implements List only          | LinkedList class can act as a list and queue both because it implements List and Deque interfaces      |  
| ArrayList is better for storing and accessing data| LinkedList is better for manipulating data       | 


## 
