import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a[] = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        int sum = 0;
        int ans = 0;
        for (int i = 0; i < n; i++) {
            sum = sum + a[i];
        }
        while (sum > 0) {
            ans += sum % 10;
            sum = sum / 10;
        }

        System.out.println(ans);
    }
}