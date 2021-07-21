import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int a[] = new int[n];
        int count = 0, i, j;
        for (i = 0; i < n; i++)
            a[i] = in.nextInt();
        for (i = 0, j = n - 1; i < n; i++, j--) {
            if (a[i] != a[j]) {
                count = 1;
                break;
            }
        }
        if (count == 0)
            System.out.println("Verified");
        else
            System.out.println("Not Verified");
    }
}