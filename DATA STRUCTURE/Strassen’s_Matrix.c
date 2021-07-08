#include<stdio.h>
int main()
{
   int a[2][2],b[2][2],c[2][2],i,j;
   int m1,m2,m3,m4,m5,m6,m7,m8;

printf("Enter the 4 of matirx 1 = ");
  for(i=0;i<2;i++)
   for(j=0;j<2;j++)
     scanf("%d",&b[i][j]);

printf("Enter the 4 of matirx 2 = ");
  for(i=0;i<2;i++)
   for(j=0;j<2;j++)
     scanf("%d",&c[i][j]);


m1 = (b[0][0] + b[1][0]) * (c[0][0] + c[0][1]);
m2 = (b[0][1] + b[1][1]) * (c[1][0] + c[1][1]);
m3 = (b[0][0] - b[1][1]) * (c[0][0] + b[1][1]);
m4 =  b[0][0] * (c[0][1] - c[1][1]);
m5 = (b[1][0] + b[1][1]) * c[0][0];
m6 = (b[0][0] + b[0][1]) * c[1][1];
m7 =  b[1][1] * (c[1][0] - c[0][0]); 

a[0][0] = m2+m3-m6-m7;
a[0][1] = m4+m6;
a[1][0] = m5+m7;
a[1][1] = m1-m3-m4-m5;

printf("Multiplication is => ");
for(i=0;i<2;i++)
{
   for(j=0;j<2;j++)
  {
     printf("%d",a[i][j]);
  }
  printf("\n");
} 
return 0;
}