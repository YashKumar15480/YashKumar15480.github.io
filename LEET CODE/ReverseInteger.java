import java.util.*;

class Solution1 {
    public int reverse(int x) {
        int rev = 0;
        Math.abs(x);

        while (x != 0) {
            rev = rev * 10;
            rev = rev + x % 10;
            x = x / 10;
        }

        return rev;
    }
}

public class yash1 {
    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Solution1 yash = new Solution1();

        if (n == 0 || n >= 536871066)
            System.out.print("0");
        if (n > 0 && n < 536871066)
            System.out.println(yash.reverse(n));
        if (n < 0)
            System.out.println("-" + (yash.reverse(n)));
    }
}