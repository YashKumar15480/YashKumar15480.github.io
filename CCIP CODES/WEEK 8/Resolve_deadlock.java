import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        int m=sc.nextInt();
        int sum=0;
        for(int i=0;i<n;i++)
            sum=sum+m;
        System.out.print(sum-(n-1));
    }
}