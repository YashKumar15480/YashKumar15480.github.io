import java.io.*;
import java.util.*;
import java.lang.*;

public class Solution {

    public static void main(String[] args) 
    {
      Scanner sc = new Scanner(System.in);
       String a=sc.next();
      char ch[] = a.toCharArray();
        int flag=0;
      
      for(int i=0;i<a.length();i++)
      { 
         if(Character.isUpperCase(ch[i]) &&  Character.isUpperCase(ch[i+1]))
         { 
           flag++; break;
           /*if(ch[i+1]==ch[i]+2)
           {
            if(Character.isUpperCase(ch[i+1]))
             { 
                 //System.out.print("2Yes");
                  flag++;
              break;
              }
           }
          }*/
         }}
      if(flag==1)System.out.print("Yes");
        else System.out.print("No");
       }
      
    }