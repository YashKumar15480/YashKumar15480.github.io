import java.io.*;
import java.util.*;

public class Reverse_N_merge_problem {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.print(i + " ");
        }
        for (int j = n; j <= 1; j--) {
            System.out.print(j + " ");
        }
    }
}