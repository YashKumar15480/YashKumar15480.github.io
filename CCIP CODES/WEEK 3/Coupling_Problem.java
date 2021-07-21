import java.io.*;
import java.util.*;

public class Coupling_Problem {

  public static void main(String[] args) {
    Scanner ss = new Scanner(System.in);
    int A = ss.nextInt();
    int B = ss.nextInt();
    int C = ss.nextInt();

    if (A == B)
      System.out.print("Yes");
    else if (B == C)
      System.out.print("Yes");
    else if (A == C)
      System.out.print("Yes");
    else
      System.out.print("No");
  }
}