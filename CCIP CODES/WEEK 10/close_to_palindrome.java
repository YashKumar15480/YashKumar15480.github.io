import java.io.*;
import java.util.*;

public class solutions {
    public static void main(String args[]) {
        int i, j;

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        String s = String.valueOf(n);
        StringBuffer sb = new StringBuffer(s);
        String b = sb.reverse().toString();

        if (s.equals(b))
            System.out.print(n);
        else {
            // negative loop
            for (i = n - 1; i >= 0; i--) {
                String s1 = String.valueOf(i);
                StringBuffer sb1 = new StringBuffer(s1);
                String b1 = sb1.reverse().toString();
                if (s1.equals(b1))
                    break;
            }
            // positive loop
            // YASH KUMAR
            for (j = n + 1; j <= 9999; j++) {
                String s2 = String.valueOf(j);
                StringBuffer sb2 = new StringBuffer(s2);
                String b2 = sb2.reverse().toString();
                if (s2.equals(b2))
                    break;
            }

            int ans1 = n - i;
            int ans2 = j - n;

            if (ans1 > ans2)
                System.out.print(j);
            else
                System.out.print(i);
        }
    }
}