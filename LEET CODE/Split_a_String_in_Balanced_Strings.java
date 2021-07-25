class Solution {
    public int balancedStringSplit(String s) {
        int i = 0;
        int count = 0;
        int balance = 0;
        while (i < s.length()) {
            if (s.charAt(i) == 'R')
                balance += 1;
            else
                balance -= 1;
            if (balance == 0)
                count++;
            i++;
        }
        return count;
    }
}

public class Split_a_String_in_Balanced_Strings {
    public static void main(String[] args) {

    }

}
