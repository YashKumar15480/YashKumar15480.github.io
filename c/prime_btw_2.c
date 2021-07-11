#include<stdio.h>
int main()
{
   int a,b,i,j,count=0,cn;
   printf("Enter number 1 => "); scanf("%d",&a);
   printf("Enter number 2 => "); scanf("%d",&b);
   for(i=a;i<=b;i++)
   {
       cn=i;
       count = 0;
     for(j=1;j<=cn;j++)
      {
          if(cn%j==0)
          {
              count++;
          }
      }
     if(count ==2 ) printf("%d ",i);
   }
  return 0;
}
