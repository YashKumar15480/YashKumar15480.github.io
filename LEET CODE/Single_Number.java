
class Solution {
    public int singleNumber(int[] nums) {
        int res = nums[0], i = 0;
        int n = nums.length;
        for (i = 1; i < n; i++)
            res = res ^ nums[i];
        return res;

    }
}

/**
 * Single_Number
 */
public class Single_Number {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}