#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main()
{
  
int k,a[200][200],b[200][200],c[200][200],i=0,j=0,n=0,x=0;

     void addition()
       {
          printf("Enter size of 2D matrix count as nXn ==> "); scanf("%d",&n);

        printf("\nEnter %d elemnts in Matrix A => ",n*n);
           for(i=0;i<n;i++)
              for(j=0;j<n;j++)
                 scanf("%d",&a[i][j]);
         
        printf("\nEnter %d elemnts in Matrix B => ",n*n);
           for(i=0;i<n;i++)
             {
              for(j=0;j<n;j++)
                {
                  scanf("%d",&b[i][j]);
                  c[i][j]=a[i][j]+b[i][j];
                }  
            }

        printf("\nAddition of matrix A and Matrix b is => \n");
           for(i=0;i<n;i++)
            {
             for(j=0;j<n;j++)
              {
               printf("  %d  ",c[i][j]);
              }  
            printf("\n");
            }
       }

    void mul()
    {
       printf("Enter size of 2D matrix count as nXn ==> "); scanf("%d",&n);

        printf("\nEnter %d elemnts in Matrix A => ",n*n);
           for(i=0;i<n;i++)
              for(j=0;j<n;j++)
                 scanf("%d",&a[i][j]);
         
        printf("\nEnter %d elemnts in Matrix B => ",n*n);
           for(i=0;i<n;i++)
              for(j=0;j<n;j++)
                  scanf("%d",&b[i][j]);
             
           for(i=0;i<n;i++)
           {
               for(j=0;j<n;j++)
               {
                 for(x=0;x<n;x++)
                 {
                     c[i][j]=c[i][j]+(a[i][x]*b[x][j]);
                 }
               }
           }
        printf("\nMultiplication of matrix A and Matrix b is => \n");
           for(i=0;i<n;i++)
            {
             for(j=0;j<n;j++)
              {
               printf("  %d  ",c[i][j]);
              }  
            printf("\n");
            }
    }
while(1)
{
  printf("\nSelect Menu");
   printf("\n For addition => 1");
   printf("\n For Multiplication => 2\n");
   printf("\n For exit ++==> 3");
     
   printf("\nEnter your Choice here ==>>"); scanf("%d",&k);
   switch(k)
   {
       case 1: addition(); break;
       case 2: mul(); break;
       case 3: exit(0); break;
       default: printf("Invalid Character"); exit(0); break;
   }
}  
  return 0;
}