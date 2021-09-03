import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner yy = new Scanner(System.in);
        int n = yy.nextInt();
        int a[] = new int[n];
        int sum = 0;
        for (int i = 0; i < n; i++)
            a[i] = yy.nextInt();

        if (n % 2 == 0) {
            for (int i = 0; i < n; i++) {
                sum = sum + a[i];
            }
            if (sum == -1) {
                System.out.print("Yes");
            } else {
                System.out.print("No");
            }
        } else
            System.out.print("No");
    }
}