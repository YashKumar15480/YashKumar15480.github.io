#include <stdio.h>

int main()
 {
    int i, first, last, mid, n, k, a[100];

    printf("Enter number of elements\n"); scanf("%d", &n);

    printf("Enter %d integers\n", n); for (i = 0; i < n; i++) scanf("%d", &a[i]);

    printf("Enter value to find\n"); scanf("%d", &k);


       first = 0;   last = n - 1; mid = (first+last)/2;

    while (first <= last) 
    {
      if (a[mid] < k)
       first = mid + 1;
        else if (a[mid] == k) 
         {
           printf("%d found at location %d.\n", k, mid+1);
           break;
         }
     else
      last = mid - 1;
      mid = (first + last)/2;
    }
if (first > last) printf("Not found! %d isn't present in the list.\n", k);
return 0;

}
