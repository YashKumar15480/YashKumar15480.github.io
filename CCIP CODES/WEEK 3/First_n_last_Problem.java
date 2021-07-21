import java.io.*;
import java.util.*;

public class First_n_last_Problem {

    public static void main(String[] args) {
        Scanner sh = new Scanner(System.in);
        String orignal = sh.nextLine();
        int n = orignal.length();
        char first = orignal.charAt(0);
        char last = orignal.charAt(n - 1);
        System.out.print(first + last);

    }
}