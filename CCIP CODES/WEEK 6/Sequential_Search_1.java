import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int a[] = new int[n];
        int i = 0;

        for (i = 0; i < n; i++)
            a[i] = sc.nextInt();

        for (i = 0; i < n; i++) {
            if (a[i] == k)

                break;

        }
        // i=i+1;
        System.out.print(i);
    }
}