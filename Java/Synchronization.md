# Synchronization in Java

`Synchronization` in java is the capability to control the access of multiple threads to any shared resource.

Java Synchronization is better option where we want to allow only one thread to access the shared resource.

It is mainly used to prevent `thread interference` and `consistency problem`.


## Lock in Object
Every object has an lock. When a `thread` needs consistent access to an object's field, 
the thread has to acquire the object's lock before accessing them. Then, release the lock when it's done with them.

## Synchronized method example

[Example code reference](https://www.javatpoint.com/synchronization-in-java)
```java
class Table{  
 synchronized void printTable(int n){//synchronized method  
   for(int i=1;i<=5;i++){  
     System.out.println(n*i);  
     try{  
      Thread.sleep(400);  
     }catch(Exception e){System.out.println(e);}  
   }  
 }  
} 



  
class MyThread1 extends Thread{  
Table t;  
MyThread1(Table t){  
this.t=t;  
}  
public void run(){  
t.printTable(5);  
}  
  
}  
class MyThread2 extends Thread{  
Table t;  
MyThread2(Table t){  
this.t=t;  
}  
public void run(){  
t.printTable(100);  
}  
}  
  
public class TestSynchronization2{  
public static void main(String args[]){  
Table obj = new Table();//only one object  
MyThread1 t1=new MyThread1(obj);  
MyThread2 t2=new MyThread2(obj);  
t1.start();  
t2.start();  
}  
}  
```

```
Output: 5
       10
       15
       20
       25
       100
       200
       300
       400
       500
```

If we declare mehotd without `Synchronization`

```java
Class Table{  
  
void printTable(int n){//method not synchronized  
   for(int i=1;i<=5;i++){  
     System.out.println(n*i);  
     try{  
      Thread.sleep(400);  
     }catch(Exception e){System.out.println(e);}  
   }  
  
 }  
}  
```

Output would be 

```
Output: 5
       100
       10
       200
       15
       300
       20
       400
       25
       500
```

## Synchronized method example with anonymous function

We can use anonymous function for threads, so less coding.

```java
//Program of synchronized method by using annonymous class  
class Table{  
 synchronized void printTable(int n){//synchronized method  
   for(int i=1;i<=5;i++){  
     System.out.println(n*i);  
     try{  
      Thread.sleep(400);  
     }catch(Exception e){System.out.println(e);}  
   }  
  
 }  
}  
  
public class TestSynchronization3{  
public static void main(String args[]){  
final Table obj = new Table();//only one object  
  
Thread t1=new Thread(){  
public void run(){  
obj.printTable(5);  
}  
};  
Thread t2=new Thread(){  
public void run(){  
obj.printTable(100);  
}  
};  
  
t1.start();  
t2.start();  
}  
}  
```

# Reference
[Java T Point - Synchronization in java](https://www.javatpoint.com/synchronization-in-java)
