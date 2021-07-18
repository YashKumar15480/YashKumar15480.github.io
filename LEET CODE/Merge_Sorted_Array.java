class Solution {
	public void merge(int[] nums1, int m, int[] nums2, int n) {
		int p1 = m - 1;
		int p2 = n - 1;
		int i = m + n - 1;

		while (p2 >= 0) {
			if (p1 >= 0 && nums1[p1] > nums2[p2]) {
				nums1[i--] = nums1[p1--];
			} else {
				nums1[i--] = nums2[p2--];
			}
		}
	}
}

/**
 * Merge Sorted Array
 */
public class Merge_Sorted_Array {
	public static void main(String[] args) {
		/*
		 * On leet code we don't need to call main method it directly linked to solution
		 * class you just need to write methods in solutions class and return the value
		 * according to method's parameters
		 * 
		 */
	}

}