class Solution12 {
    public boolean isPalindrome(String s) {

        s = s.replace(",", "");
        s = s.replace(" ", "");
        s = s.replace(":", "");
        s = s.replace(".", "");
        s = s.replace("@", "");

        s = s.replace("#", "");
        s = s.replace("!", "");
        s = s.replace("$", "");
        s = s.replace("%", "");
        s = s.replace("^", "");

        s = s.replace("_", "");
        s = s.replace("(", "");
        s = s.replace(")", "");
        s = s.replace("-", "");
        s = s.replace("+", "");

        s = s.replace("'", "");
        s = s.replace("[", "");
        s = s.replace("]", "");
        s = s.replace("{", "");
        s = s.replace("}", "");

        s = s.replace("\"", "");
        s = s.replace("?", "");
        s = s.replace(";", "");
        s = s.replace("`", "");
        s = s.toLowerCase();

        StringBuffer sb = new StringBuffer(s);
        String b = sb.reverse().toString();
        if (s.equals(b))
            return true;
        else
            return false;

    }
}

public class Valid_Palindrome {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */

    }
}