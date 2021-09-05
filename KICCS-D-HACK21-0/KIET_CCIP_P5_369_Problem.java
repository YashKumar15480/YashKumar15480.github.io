import java.io.*;
import java.util.*;

public class Q369 {
    public static int count(int n, int x) {
        int a, c = 0;
        while (n > 0) {
            a = n % 10;
            if (a == x)
                c++;
            n = n / 10;
        }
        return c;
    }

    public static void main(String args[]) {
        int a, b, three, six, nine, count = 0;
        Scanner br = new Scanner(System.in);
        a = br.nextInt();
        b = br.nextInt();
        for (int i = a; i <= b; i++) {
            three = count(i, 3);
            six = count(i, 6);
            nine = count(i, 9);
            if (three > 0) {
                if (three == six && six == nine) {
                    count++;
                }
            }
        }

        System.out.println(count);
    }
}
