import java.io.*;
import java.util.*;

public class Solution {

  public static void main(String[] args) {
    Scanner ohh = new Scanner(System.in);
    int k, n, i, j;
    k = ohh.nextInt();
    n = ohh.nextInt();
    int a[] = new int[n];
    for (i = 0; i < n; i++)
      a[i] = ohh.nextInt();

    int res = 0;
    for (i = 0; i < k; i++)
      res += a[i];

    int sum = res;
    for (i = k; i < n; i++) {
      sum += a[i] - a[i - k];
      res = Math.max(res, sum);
    }
    System.out.print(res);

  }
}