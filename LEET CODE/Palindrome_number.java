import java.util.*;

class Solution1 {
    public boolean isPalindrome(int x)

    {
        boolean y1 = true;
        boolean y2 = false;

        String s = String.valueOf(x);
        StringBuffer sb = new StringBuffer(s);
        String b = sb.reverse().toString();

        if (s.equals(b))
            return y1;
        else
            return y2;

    }
}

public class Palindrome_number {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        sc.close();
        int n = sc.nextInt();
        Solution1 ss = new Solution1();
        System.out.println(ss.isPalindrome(n));
    }
}