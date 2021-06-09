import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) 
    {
     Scanner oi =new Scanner(System.in);
      int n=oi.nextInt();
      int sub=37000; 
      for(int i=0;i<n;i++) 
      {
        sub=sub-20;
        System.out.print(sub+" ");
      }
      System.out.println("\n"+sub);
}}