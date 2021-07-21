#include <stdio.h>

void swap(int *a, int *b)
{
   int temp;
   temp = *a;
   *a = *b;
   *b = temp;
}

void selectionSort(int a[], int n)
{
     int i, j;
     for (i = 0 ; i < n;i++)
     {
      for (j = i ; j < n; j++)
       {
         if (a[i] > a[j])
         swap(&a[i], &a[j]);
       }
     }
}

int main()
{
int a[10], i, n;
   printf("How many numbers you want to sort: "); scanf("%d", &n);

   printf("\nEnter %d numbers =>\n",n); for (i=0;i<n;i++) scanf("%d",&a[i]);

   selectionSort(a, n);
  printf("\nSorted array is ");
  for (i = 0; i < n;i++) printf(" %d ", a[i]);

return 0;
}