class Solution {
    public int lengthOfLastWord(String s) {
        int count = 0, length = s.length();
        boolean foundLetter = false;
        for (int i = length - 1; i >= 0; i--) {
            char c = s.charAt(i);
            if (c != ' ') {
                count++;
                foundLetter = true;
            } else {
                if (foundLetter)
                    return count;
            }
        }
        return count;
    }
}

/**
 * Length of Last Word
 */
public class Length_of_Last_Word {
    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}
