#include<stdio.h>
#include<stdlib.h>

int main()
{

    int a[200][200],n,i,j,k;
    char ch;

   int transpose()
{
    printf("\nEnter size of 2D matrix count as nXn ==> "); scanf("%d",&n);

        printf("\nEnter %d elemnts in Matrix A => ",n*n);
           for(i=0;i<n;i++)
              for(j=0;j<n;j++)
                 scanf("%d",&a[i][j]);
        
    printf("\n matrix without transpose  => \n");
        for(i=0;i<n;i++)
        {
          for(j=0;j<n;j++)
           {
            printf("  %d  ",a[i][j]);
           }  
           printf("\n");
        }

    printf("\n matrix After transpose  => \n");
        for(i=0;i<n;i++)
        {
         for(j=0;j<n;j++)
          {
            printf("  %d  ",a[j][i]);
          }  
          printf("\n");
        }
        return 0;
}

while(1)
{
  printf("\nSelect Menu");
   printf("\n Press --Y-- to tanspose matrix");
   printf("\n Press --N-- to exit program--");
     
   printf("\n\nEnter your Choice here ==>>"); scanf("%c",&k);
   switch(k)
   {
       case 89:
       case 121: transpose(); break;
       case 78:
       case 110: exit(0); break;
       default: printf("Invalid CHaracter"); exit(0); break;
   }
}  
   return 0; 
}