#include <stdio.h>
void main()
{
int n,a[1000],i,k,flag = -1;


printf("Enter the number of elements wants to enter in array => "); scanf("%d", &n);
printf("Enter the %d elements one by one \n",n);
for (i=0;i<n;i++) scanf("%d",&a[i]); 

printf("Enter the element to be searched in array  "); scanf("%d",&k);

for (i=0;i<n;i++)
{
   if (k==a[i])
   {
    flag = i;
     break;
   }
}
 (flag== -1)? printf("Element not found"):printf("Element is present at pos => %d", flag+1);
}