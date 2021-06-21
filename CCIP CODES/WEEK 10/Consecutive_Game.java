import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
        int i,temp=0;
        int n= sc.nextInt();
        int arr[] = new int[n];
        for(i=0;i<n;i++)
        {
            arr[i] = sc.nextInt();
        }
        
        Arrays.sort(arr);
        for(i=0;i<n-1;i++)
        {
            if(arr[i]!=arr[i+1]-1)
            {
                temp = 1;
            }
        }
        if(temp==0)System.out.println("1");
        else System.out.println("0");
        
    }
}