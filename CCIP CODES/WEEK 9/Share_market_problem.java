import java.io.*;
import java.util.*;


public class Solution {

    public static void main(String[] args) 
    {
      Scanner neww = new Scanner(System.in);
      int sum=0;
      int n =neww.nextInt();
      
      int profit,i,j;
      
      int a[] = new int[n];
      
      for(i=0;i<n;i++) a[i]=neww.nextInt();
      
      for(i=0;i<n;i++)
      {
        if((i+1)<n)
        {
          if(a[i]<a[i+1])
          {
            profit=a[i+1]-a[i];
            sum=sum+profit;
          }
        }
        else break;
       }
      System.out.print(sum);
    }
}