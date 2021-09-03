import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner ss = new Scanner(System.in);
        String a = ss.next();
        char ch1[] = a.toCharArray();
        int count = 0;
        for (int i = 0, j = i + 1; i < a.length() - 1; i++, j++) {
            if (ch1[i] == 'r') {
                count++;

            }
            if (ch1[j] == 'a') {
                count++;
                break;
            }
        }
        if (count == 2)
            System.out.print("Yes");
        else
            System.out.println("No");
    }
}