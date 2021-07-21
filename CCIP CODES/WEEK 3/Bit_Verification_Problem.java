import java.io.*;
import java.util.*;

public class Bit_Verification_Problem {

  public static void main(String[] args) {
    int i = 0;
    int a[] = new int[10];
    Scanner ss = new Scanner(System.in);
    int n = ss.nextInt();
    int n1 = ss.nextInt();
    while (n != 0) {
      a[i] = n % 2;
      i++;
      n = n / 2;
    }
    if (a[n1 - 1] == 1)
      System.out.print("YES");
    else
      System.out.print("NO");
  }
}