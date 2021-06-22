#include<stdio.h>

int main()
{
  int i,j,k,l,r,n,p,a[100],temp=0;

  printf("Enter no of elements to be inserted => "); scanf("%d",&n);

  printf("Enter %d numbers => ",n);

  for(i=0;i<n;i++) scanf("%d",&a[i]);


  for(i=1;i<n;i++)
  {
      k=i;
      do
      {
          p=(k-1)/2;
          if(a[p]<a[k])
            {
                temp = a[p];
                a[p] = a[k];
                a[k] = temp;
            }
          k=p;  
      } while (k!=0);
       
  }



  for(j=n-1;j>=0;j--)
  {
      temp = a[0];
      a[0] = a[j];
      a[j] = temp;
      p=0;
      do
      {
          r=2*p+1;
          if((a[r]<a[r+1]) && r<j-1) r++;
         
         if(a[p]<a[r] && r<j)
           {
               temp = a[p];
               a[p] = a[r];
               a[r] = temp;
           }
         p=r;
      } while (r<j);
   }


  printf("sorted list is => \n");

  for(i=0;i<n;i++) printf("%d  ",a[i]);

return 0;
}