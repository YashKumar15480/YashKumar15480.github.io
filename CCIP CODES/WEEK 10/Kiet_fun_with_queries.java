import java.io.*;
import java.util.*;

public class Solution {
    public static int binaryCount(int n)
    {
        int count = 0;
        while (n > 0) {
            count =count+1;
            n = n & (n-1);
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        for(int j=0;j<x;j++)
        {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int total=0;
            for(int i=a;i<=b;i++)
            {
                total += binaryCount(i);
            }
            System.out.println(total);
        }
        
    }
}