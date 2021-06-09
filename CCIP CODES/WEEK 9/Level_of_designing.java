import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
   /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
   Scanner s= new Scanner(System.in);
        int m=s.nextInt();
        int n=s.nextInt();
        if(m>n){
         double a1 = Math.sqrt(m);
            
            if(a1==n){
                System.out.println(2);
            }
            else
            {System.out.println(3);}
        }
        else{
            System.out.println("Not Possible");
        }
    }
}