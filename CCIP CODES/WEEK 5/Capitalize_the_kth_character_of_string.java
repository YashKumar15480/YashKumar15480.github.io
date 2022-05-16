import java.io.*;
import java.util.*;
import java.lang.*;

public class Capitalize_the_kth_character_of_string {

    public static void main(String[] args) {
        Scanner yash = new Scanner(System.in);
        int n = yash.nextInt();
        String a = yash.next();
        char[] ar = a.toCharArray();

        for (int i = 0; i < a.length(); i++) {
            if (i == n - 1) {
                System.out.print(ar[i] = Character.toUpperCase(ar[i]));

            } else {
                System.out.print(ar[i]);
            }
        }
    }
}
// yash.