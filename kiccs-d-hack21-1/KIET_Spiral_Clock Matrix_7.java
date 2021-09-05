import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int p = 1;
        generateMatrix(n);
        // rotate(matrix);
        // for(int i=0;i<n;i++){
        // for(int j=0;j<n;j++){
        // System.out.print(matrix[j][i]);
        // }
        // System.out.println();
        // }
    }

    public static void generateMatrix(int n) {
        int[][] result = new int[n][n];
        int cnt = 1;
        for (int layer = 0; layer < (n + 1) / 2; layer++) {
            // direction 1 - traverse from left to right
            for (int ptr = layer; ptr < n - layer; ptr++) {
                result[layer][ptr] = cnt++;
            }
            // direction 2 - traverse from top to bottom
            for (int ptr = layer + 1; ptr < n - layer; ptr++) {
                result[ptr][n - layer - 1] = cnt++;
            }
            // direction 3 - traverse from right to left
            for (int ptr = layer + 1; ptr < n - layer; ptr++) {
                result[n - layer - 1][n - ptr - 1] = cnt++;
            }
            // direction 4 - traverse from bottom to top
            for (int ptr = layer + 1; ptr < n - layer - 1; ptr++) {
                result[n - ptr - 1][layer] = cnt++;
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = n - 1; j >= 0; j--) {
                System.out.print(result[j][i] + " ");
            }
            System.out.println();
        }

    }
}
