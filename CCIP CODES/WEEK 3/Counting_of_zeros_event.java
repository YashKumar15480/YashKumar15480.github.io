import java.io.*;
import java.util.*;

public class Counting_of_zeros_event {

  public static void main(String[] args) {
    Scanner nn = new Scanner(System.in);
    int n = nn.nextInt();
    int fact = 0;
    for (int i = 5; n / i >= 1; i *= 5) {
      fact += n / i;
    }
    System.out.print(fact);
  }
}