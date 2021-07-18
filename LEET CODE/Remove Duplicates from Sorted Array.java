class Solution {
    public int removeDuplicates(int[] nums) {

        int val = -199;
        int position = 0;

        for (int i = 0; i < nums.length; i++) {
            if (val != nums[i]) {
                nums[position] = nums[i];
                val = nums[i];
                position++;
            }
        }
        return position;
    }
}
