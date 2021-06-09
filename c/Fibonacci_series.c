#include<stdio.h>
int main()
{
    int a=1,b=0,c;
    int n;
    printf("Enter till where you want to find number = ");
    scanf("%d",&n);

    printf("Fibonacii series till %d is =>",n);

    printf("%5d",b);
    for(int i=0;i<=n;i++)
    {
        c=a+b;  a=b;  b=c;
        printf("%5d",c);
    }
    return 0;
}
