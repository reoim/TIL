## Quick Sort
Performance: O(NLogN)

worst-case time complexity: O(N^2)

Note: 
>Quick Sort has a worst-case scenario which is slower than Merge sort or Heap Sort. 
>However, the worst-case scenario rarely occurs. 
>
>Quick Sort is more practical because its inner loop can be implemented on most architecture.
>Merge Sort is better for huge data and stored in external storage.

```java
public class QuickSort {
	int partition(int[] arr, int low, int high) {
		int pivot = arr[high];
		int i = low-1;
		for(int j=low; j<high; j++) {
			if(arr[j] <= pivot) {
				i++;
				int tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
		// swap pivot with arr[i+1]
		int tmp = arr[i+1];
		arr[i+1] = arr[high];
		arr[high] = tmp;
		
		return i+1;
	}
	void sort(int[] arr, int low, int high) {
		if(low < high) {
			int pi = partition(arr, low, high);
			sort(arr, low, pi-1);
			sort(arr, pi+1, high);
		}
	}
	static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i]+" ");
        System.out.println();
    }
	public static void main(String[] args) {
		int arr[] = {10, 7, 8, 9, 1, 5};
        int n = arr.length;
 
        QuickSort ob = new QuickSort();
        ob.sort(arr, 0, n-1);
 
        System.out.println("sorted array");
        printArray(arr);

	}

}

```

[Reference](http://www.geeksforgeeks.org/quick-sort/)
