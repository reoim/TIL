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

Java
```java
public class SelectionSort {

	public static int[] selectionSort(int[] arr) {
		for(int i=0; i<arr.length; i++) {
			int min_idx = i;
			for(int j=i+1; j<arr.length; j++) {
				if(arr[j]<arr[min_idx]){
					min_idx = j;
				}
			}
			int tmp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = tmp;
			
		}
		return arr;
	}
	public static void main(String[] args) {
		int arr[] = {64,25,12,22,11};
		int sortedArr[] = selectionSort(arr);
		for(int i=0; i<sortedArr.length; i++){
			System.out.println(sortedArr[i]);
		}
	}

}
```
