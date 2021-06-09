import java.io.*;
import java.util.*;
import java.lang.*;
public class Solution {

    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
        int a[]=new int[6];
        for(int i=0;i<6;i++)a[i]=sc.nextInt();
        
        int sum1=0;
        int sum2=0;
        for(int i=0,j=3;i<3;i++,j++) 
        {sum1=sum1+a[i];
         sum2=sum2+a[j];
        }
        System.out.print(sum1*sum2);
        
        
    }
}