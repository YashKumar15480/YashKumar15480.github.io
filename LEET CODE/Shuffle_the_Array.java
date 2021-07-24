class Solution {
    public int[] shuffle(int[] nums, int n) {
        int arr[] = new int[n * 2];
        int a = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i % 2 == 0 || i == 0) {
                arr[i] = nums[a];
                a++;
            } else {
                arr[i] = 0;
            }
        }
        int k = 1;
        for (int j = n; j < nums.length; j++) {
            if (k % 2 != 0) {
                arr[k] = nums[j];
                k++;
                k++;
            }
        }

        return arr;
    }
}

/**
 * Shuffle_the_Array
 */
public class Shuffle_the_Array {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}
