class Solution {
    public int[] runningSum(int[] nums) {
        int size = nums.length;
        int temp = nums[0];
        for (int i = 1; i < size; i++) {
            nums[i] = temp + nums[i];
            temp = nums[i];
        }
        return nums;
    }
}

/**
 * Running_Sum_of_1d_Array
 */
public class Running_Sum_of_1d_Array {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}