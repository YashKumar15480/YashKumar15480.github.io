#include<stdio.h>
int main()
{
   long long int s=1; int n,i,p;
    printf("Enter number => ");  scanf("%d",&n);
    printf("Enter the value of power => ");  scanf("%d",&p);
     
   for(i=1;i<=p;i++) s = s*n;
    
     printf("\n number %d with power %d => %lld",n,p,s);
     return 0;
}
