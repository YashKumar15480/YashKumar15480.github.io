import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
      int i,j,temp=0,temp2=0;
      int n = sc.nextInt();
      int a[]=new int[n];
      for(i=0;i<n;i++)a[i]=sc.nextInt();
      
      //temp=a[0];
      ///a[0]=a[n-1];
      //a[n-1]=temp;
      
  int first;
      first=a[0];
      for(i=0;i<n-1;i++)
      {
        a[i]=a[i+1];
      }
      a[i]=first;
      for(i=0;i<n;i++) System.out.print(a[i]+" ");
    }
}