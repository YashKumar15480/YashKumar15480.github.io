import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
     Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int temp = 0;
        if(n<m)
        {
            temp = n;
            n = m;
            m = temp;
        }
        int diff = n-m;
        int fact1=1;
        int fact2=1;
        for(int i=1;i<=n;i++)
        {
            fact1= fact1*i;
        }
        for(int i=1;i<=diff;i++)
        {
            fact2= fact2*i;
        }
        System.out.println(fact1/fact2);
    }
}