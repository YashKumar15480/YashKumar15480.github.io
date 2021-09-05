#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
   int extra,a,b,c,sum,ans,i,j,out=0;
    scanf("%d%d%d",&a,&b,&c);
    int x[c];
    sum = a+b;
    ans = sum/c;
    if(c%2 == 0)
    {
        printf("%d",2*c-2); return 0;
    }
    
    extra = sum%c;
    for(i=0;i<c;i++) x[i]=ans;
    for(j=0;j<extra;j++) x[j]=x[j]+1;
    for(i=0;i<c;i++) out=out+(x[i]-1);
    printf("%d",out);
        
}
