class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 0;
        for (int i = digits.length - 1; i >= 0; i--) {
            carry = (digits[i] + 1) / 10;
            digits[i] = (digits[i] + 1) % 10;
            if (carry == 0)
                return digits;
        }
        int[] value = new int[digits.length + 1];
        value[0] = 1;
        return value;
    }
}

/**
 * Plus_One
 */
public class Plus_One {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}