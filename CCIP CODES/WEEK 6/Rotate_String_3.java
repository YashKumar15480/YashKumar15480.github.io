import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String ans = a.substring(1) + a.substring(0, 1);
        System.out.print(ans.charAt(1));
    }
}