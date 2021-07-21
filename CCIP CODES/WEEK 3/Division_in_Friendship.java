import java.util.*;

public class Division_in_Friendship {

  public static void main(String[] args) {
    Scanner sh = new Scanner(System.in);
    int m1 = sh.nextInt();
    int m2 = sh.nextInt();

    if (m1 % m2 == 0)
      System.out.print(m1);
    else
      System.out.print(m2);
  }
}