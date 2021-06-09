import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) 
    {
       Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        switch(n)
        {
            case 2: n=2;for(int i=1;i<7;i++) n=n*2; break;
                
            case 3: n=3; for(int i=1;i<7;i++) n=n*3; break;
            case 4: n=4; for(int i=1;i<7;i++) n=n*4; break;
        }
        System.out.print(n);
    }
}