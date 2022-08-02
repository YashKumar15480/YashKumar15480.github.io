import java.util.Scanner;

class solutionn {
    boolean s1 = true;
    boolean s2 = false;
    String a, b;

    boolean isfinds() {
        int i, j, sum1 = 0, sum2 = 0, temp;
        Scanner nn = new Scanner(System.in);
        System.out.print("enter string 1 =>");
        String a = nn.nextLine();
        System.out.print("enter string 2 =>");
        String b = nn.nextLine();

        if (a.length() == b.length()) {
            for (i = 0; i < a.length(); i++) {
                sum1 = sum1 + (int) a.charAt(i);
                sum2 = sum2 + (int) b.charAt(i);
            }
            if (sum1 == sum2)
                return s1;
            else
                return s2;
        } else
            return s2;
    }
}

public class Anagram {
    public static void main(String args[]) {
        solutionn n1 = new solutionn();

        System.out.println("Case Sensitive program \n To find given 2 string is Anagram or Not");

        System.out.println("Strings Anagram =>>" + n1.isfinds());
        // yash kumar
    }
}
