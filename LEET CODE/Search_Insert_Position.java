class Solution {
    public int searchInsert(int[] nums, int target) {
        int i = 0, n = nums.length;
        for (i = 0; i < n; i++) {
            if (nums[i] >= target)
                return i;

        }
        return i;
    }
}

/**
 * Search Insert Position
 */
public class Search_Insert_Position {
    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }

}
