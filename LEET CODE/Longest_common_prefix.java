class Solution {
    public String longestCommonPrefix(String[] strs) {
        String pre = "";
        int lo = 0, hi = 200;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            boolean success = true;
            if (strs[0].length() < mid) {
                hi = mid - 1;
                continue;
            }
            String temp = strs[0].substring(0, mid);
            for (int i = 1; i < strs.length; i++) {
                String s = strs[i];
                if (s.length() < mid || !s.substring(0, mid).equals(temp)) {
                    hi = mid - 1;
                    success = false;
                    break;
                }
            }
            if (success) {
                lo = mid + 1;
                pre = temp;
            }
        }
        return pre;
    }
}

public class Longest_common_prefix {
    public static void main(String[] args) {

        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}
