class Solution121 {
    public int[] twoSum(int[] numbers, int target) {

        int i = 0, j = numbers.length - 1;
        while (numbers[i] + numbers[j] != target) {
            if (numbers[i] + numbers[j] > target) {
                j--;
            } else {
                i++;
            }
        }
        return new int[] { i + 1, j + 1 };
    }
}

/**
 * Two_Sum_II_Input_array_is_sorted
 */
public class Two_Sum_II_Input_array_is_sorted {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}