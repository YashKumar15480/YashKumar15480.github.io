import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // int n=sc.nextInt();
        int a[] = new int[4];
        int b[] = new int[4];

        for (int i = 0; i < 4; i++)
            a[i] = sc.nextInt();
        for (int i = 0; i < 4; i++)
            b[i] = sc.nextInt();

        for (int i = 0; i < 4; i++) {
            System.out.print(a[i] * b[i] + " ");
        }
    }

}