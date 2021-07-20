class Solution {
    public int findPeakElement(int[] nums) {
        int i = 0, max1 = 0;

        if (nums.length == 1)
            return 0;
        int max = nums[0];

        for (i = 1; i < nums.length; i++)
            if (nums[i] > max) {
                max = nums[i];
                max1 = i;
            }
        return max1;
    }
}

/**
 * Find_Peak_Element
 */
public class Find_Peak_Element {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}