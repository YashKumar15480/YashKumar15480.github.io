#include<stdio.h>
int main()
{
   int yash = 70;
   int *p1 = &yash;
   int **p2 = &p1;
   int ***p3 = &p2;
   int ****p4 = &p3;
   int *****p5 = &p4;
   int ******p6 = &p5;

   printf("Value of p6 is => %d",*(*(*(*(*(*p6))))));

return 0;

}