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
| `ArrayList` internally uses dynamic array to store the elements      | `LinkedList` internally uses doubly linked list to store the elements       | 
| Manipulation with `ArrayList` is slow because it internally uses array. If any element is removed from the array, all the bits are shifted in memory     | Manipulation with `LinkedList` is faster than ArrayList because it uses doubly linked list so no bit shifting is required in memory       | 
| `ArrayList` class can act as a list only because it implements List only          | `LinkedList` class can act as a list and queue both because it implements List and Deque interfaces      |  
| `ArrayList` is better for storing and accessing data| `LinkedList` is better for manipulating data       | 


## HashSet
* Stores the elements by using a mechanism called hashing
* Contains unique elements only

## List VS HashSet
`List` can contain duplicate elements whereas `Set` contains unique elements only


## LinkedHashSet
* Contains unique elements only like `HashSet`
* Provides all optional set operations, and permits null elements
* Maintains insertion order


## TreeSet
* Contains unique elements only like HashSet.
* Access and retrieval times are quiet fast.
* Maintains ascending order

#### The elements in TreeSet must be Comparable type.
`String` and `Wrapper` classes are `Comparable` by default. To add user-defined objects in TreeSet, you need to implement Comparable interface.

ex>
```java
import java.util.*;  
class Book implements Comparable<Book>{  
int id;  
String name,author,publisher;  
int quantity;  
public Book(int id, String name, String author, String publisher, int quantity) {  
    this.id = id;  
    this.name = name;  
    this.author = author;  
    this.publisher = publisher;  
    this.quantity = quantity;  
}  
public int compareTo(Book b) {  
    if(id>b.id){  
        return 1;  
    }else if(id<b.id){  
        return -1;  
    }else{  
    return 0;  
    }  
}  
}  
public class TreeSetExample {  
public static void main(String[] args) {  
    Set<Book> set=new TreeSet<Book>();  
    //Creating Books  
    Book b1=new Book(121,"Let us C","Yashwant Kanetkar","BPB",8);  
    Book b2=new Book(233,"Operating System","Galvin","Wiley",6);  
    Book b3=new Book(101,"Data Communications & Networking","Forouzan","Mc Graw Hill",4);  
    //Adding Books to TreeSet  
    set.add(b1);  
    set.add(b2);  
    set.add(b3);  
    //Traversing TreeSet  
    for(Book b:set){  
    System.out.println(b.id+" "+b.name+" "+b.author+" "+b.publisher+" "+b.quantity);  
    }  
}  
}  
```

```
101 Data Communications & Networking Forouzan Mc Graw Hill 4
121 Let us C Yashwant Kanetkar BPB 8
233 Operating System Galvin Wiley 6
```


## Queue
Java Queue interface orders the element in ~PPAP(Pen Pineapple Apple Pen)~ FIFO(First In First Out) manner. In FIFO, first element is removed first and last element is removed at last.

### PriorityQueue
* The PriorityQueue class provides the facility of using queue. But it does not orders the elements in FIFO manner. It inherits AbstractQueue class.
* Let's see a PriorityQueue example where we are adding books to queue and printing all the books. The elements in PriorityQueue must be of Comparable type. String and Wrapper classes are Comparable by default. To add user-defined objects in PriorityQueue, you need to implement Comparable interface.

ex>
```java
import java.util.*;  
class Book implements Comparable<Book>{  
int id;  
String name,author,publisher;  
int quantity;  
public Book(int id, String name, String author, String publisher, int quantity) {  
    this.id = id;  
    this.name = name;  
    this.author = author;  
    this.publisher = publisher;  
    this.quantity = quantity;  
}  
public int compareTo(Book b) {  
    if(id>b.id){  
        return 1;  
    }else if(id<b.id){  
        return -1;  
    }else{  
    return 0;  
    }  
}  
}  
public class LinkedListExample {  
public static void main(String[] args) {  
    Queue<Book> queue=new PriorityQueue<Book>();  
    //Creating Books  
    Book b1=new Book(121,"Let us C","Yashwant Kanetkar","BPB",8);  
    Book b2=new Book(233,"Operating System","Galvin","Wiley",6);  
    Book b3=new Book(101,"Data Communications & Networking","Forouzan","Mc Graw Hill",4);  
    //Adding Books to the queue  
    queue.add(b1);  
    queue.add(b2);  
    queue.add(b3);  
    System.out.println("Traversing the queue elements:");  
    //Traversing queue elements  
    for(Book b:queue){  
    System.out.println(b.id+" "+b.name+" "+b.author+" "+b.publisher+" "+b.quantity);  
    }  
    queue.remove();  
    System.out.println("After removing one book record:");  
    for(Book b:queue){  
        System.out.println(b.id+" "+b.name+" "+b.author+" "+b.publisher+" "+b.quantity);  
        }  
}  
}  
```

output
```
Traversing the queue elements:
101 Data Communications & Networking Forouzan Mc Graw Hill 4
233 Operating System Galvin Wiley 6
121 Let us C Yashwant Kanetkar BPB 8
After removing one book record:
121 Let us C Yashwant Kanetkar BPB 8
233 Operating System Galvin Wiley 6
```

## Deque
Supports element insertion and removal at both ends. Deque means "Double Ended queue".

### ArrayDeque
* Can add or remove elements from both ends.
* Null elements are not allowed
* Not thread safe, in the absence of external synchronization
* Has no capacity restrictions
* Faster than LinkedList and Stack


## HashMap
* Contains key, value
* Only store unique elements
* It may have one null key and multiple null values
* Maintains no order

## LinkedHashMap
It inherits HashMap class. Only a difference between HashMap and LinkedHashMap is that LinkedHashMap maintains insertion order.

## TreeMap
* It is same as HashMap instead maintains ascending order and cannot have any null key

## HashTable
* HashTable is an array of list. Each list is known as a bucket. The postion of bucket is identified by calling the hashcode() method. A Hashtable contains values based on the key
* It contains only unique elements
* It may have not have any null key or value
* It is synchronized

## HashMap vs HashTable
| **HashMap** | **HashTable** |
|------------|-------------|
| HashMap is non synchronized. It is not-thread safe and can't be shared between many threads without proper synchronization code      | Hashtable is synchronized. It is thread-safe and can be shared with many threads       | 
| Allows one null key and multiple null values     | Doesn't allow any null key or value       | 
| Fast          | Slow      |  
| can make the HashMap as synchronized by calling this code
`Map m = Collections.synchronizedMap(hashMap);`| Hashtable is internally synchronized and can't be unsynchronized       | 
| HashMap is traversed by Iterator | HashTable is traversed by Enumerator and Iterator |
| Inherits AbstractMap class | Inherits Dictionary class |

## ArrayList vs Vector
ArrayList and Vector both implements List interfac and maintains insertion order.

| **ArrayList** | **Vector** |
|------------|-------------|
| Not synchronized     | synchronized   | 
| increments 50% of current array size if it exceeds than its capacity   | Double the array size when it exceeds its capacity   | 
| Fast          | Slow      |  
| traversed by Iterator | Traversed by Enumerator and Iterator |


# Reference
[Java T Point - Collection Framework](http://www.javatpoint.com/collections-in-java)
