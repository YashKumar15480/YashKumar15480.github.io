import java.io.*;
import java.util.*;
import java.lang.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int b = sc.nextInt();
        int ex = sc.nextInt();
        switch(b)
        {
            
            case 1:  {System.out.print("1"); break;}    
            case 2:  {double res = Math.pow(b,ex+1)-1;
                      System.out.print((int)res); break;}
             
            case 3:  { double res = (Math.pow(b,ex+1)-1)/2;
                       System.out.print((int)res); break;}  
             
            case 4: { double res = (Math.pow(b,ex+1)-1)/3;
                       System.out.print((int)res); break;}  
             
            case 5: { double res = (Math.pow(b,ex+1)-1)/4;
                       System.out.print((int)res); break;}   
              
            case 6: { double res = (Math.pow(b,ex+1)-1)/5;
                       System.out.print((int)res); break;}    
                
        }        
    }
}