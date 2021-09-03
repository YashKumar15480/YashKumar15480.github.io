import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner nnn = new Scanner(System.in);
        String a = nnn.nextLine();
        for (int i = 0; i < a.length(); i++)
            if (i % 2 != 0)
                System.out.print((a.charAt(i)) + " ");
    }
}