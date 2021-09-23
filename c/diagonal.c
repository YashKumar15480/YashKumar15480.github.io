#include<stdio.h>
int main()
{
   int x,y;
   printf("enter the number of Rows =>"); scanf("%d",&x);
   printf("enter the number of Coloumns =>"); scanf("%d",&y);

   if(x!=y) printf("Matrix is not equal \n");

   int a[x][y],i,j,k;

   printf("enter elements for %dx%d matrix =>\n",x,y);
     
     for(i=0;i<x;i++) for(j=0;j<y;j++) scanf("%d",&a[i][j]);
     for(i=0;i<x;i++) 
        { for(j=0;j<y;j++)
            {  printf("%5d",a[i][j]);}
            printf("\n");
        }  

        int sum=0;
         for(i=0;i<x;i++) 
          { for(j=0;j<y;j++)
             { 
                 if(i==j)
                 {
                     sum = sum+a[i][j];
                 }
              }
          }
          printf("sum of first diagonal is => %d\n",sum);  

          int sec=0;
         for(i=0;i<x;i++) 
          { for(j=0;j<y;j++)
             { 
                 if(i+j == x-1)
                 {
                     sec = sec+a[i][j];
                 }
              }
          }
          printf("sum of Second diagonal is => %d",sec);  
 return 0;//
}