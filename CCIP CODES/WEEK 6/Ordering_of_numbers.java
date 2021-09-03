import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int i = 0, j = 0, temp = 0;
        int a[] = new int[n];
        for (i = 0; i < n; i++)
            a[i] = sc.nextInt();

        for (i = 0; i < n - 1; i++)
            for (j = i + 1; j < n; j++)
                if (a[i] > a[j]) {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
        for (i = 0; i < n; i++)
            System.out.print(a[i] + " ");

    }
}