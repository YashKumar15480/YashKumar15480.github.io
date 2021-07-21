import java.io.*;
import java.util.*;

public class Marriage_proposal_1 {

    public static void main(String[] args) {
        Scanner yash = new Scanner(System.in);
        int n = yash.nextInt();
        int px = n;
        int py = n;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n * 2; j++) {
                if (j >= px - i && j < py + i) {
                    System.out.print(" ");
                } else {
                    System.out.print("*");
                }
            }

            System.out.println();
        }
    }
}