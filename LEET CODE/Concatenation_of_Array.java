class Solution {
    public int[] getConcatenation(int[] nums) {
        int size = nums.length;
        int a[] = new int[size + size];

        for (int i = 0; i < size; i++)
            a[i] = nums[i];
        for (int i = size, j = 0; i < size + size; i++, j++)
            a[i] = nums[j];
        return a;
    }
}

/**
 * Concatenation_of_Array
 */
public class Concatenation_of_Array {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}