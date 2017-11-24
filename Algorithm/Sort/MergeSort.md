## Merge Sort

Performance: O(NLogN)

Space complexity: O(N)

Java
```java
public class MergeSort {
	void merge(int[] arr, int begin, int middle, int end) {
		int leftSize = middle + 1 - begin;
		int rightSize = end - middle;
		int leftHalf[] = new int[leftSize];
		int rightHalf[] = new int[rightSize];
		
		// Copy arrays
		for(int i=0; i<leftSize; i++) 
			leftHalf[i] = arr[begin + i];
		for(int j=0; j<rightSize; j++)
			rightHalf[j] = arr[middle + 1 + j];
		
		int l = 0, r = 0;
		int k = begin;
		
		while(l < leftSize && r < rightSize) {
			if(leftHalf[l] <= rightHalf[r]) {
				arr[k] = leftHalf[l];
				l++;
			} else {
				arr[k] = rightHalf[r];
				r++;
			}
			k++;
		}
		
		while(l < leftSize) {
			arr[k] = leftHalf[l];
			l++;
			k++;
		}
		
		while(r < rightSize) {
			arr[k] = rightHalf[r];
			r++;
			k++;
		}
	}
	
	void sort(int[] arr, int begin, int end) {
		int middle = (begin + end)/2;
		if(begin < end) {
			sort(arr, begin, middle);
			sort(arr, middle+1, end);
			merge(arr, begin, middle, end);
			
		}
	}
	
	static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
	public static void main(String[] args) {
		int arr[] = {12, 11, 13, 5, 6, 7};
		 
        System.out.println("Given Array");
        printArray(arr);
 
        MergeSort ob = new MergeSort();
        ob.sort(arr, 0, arr.length-1);
 
        System.out.println("\nSorted array");
        printArray(arr);
	}

}
```


[Reference](http://www.geeksforgeeks.org/merge-sort/)
