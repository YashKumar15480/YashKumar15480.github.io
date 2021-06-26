#include<stdio.h>
int main()
{
  int variable=10;
  int *pointer;

  pointer =&variable;

  printf("Value hold by pointer => %p\n",pointer);
  printf("Value hold by variable => %d\n",variable);

  printf("Value hold by address %p => %d\n",pointer,*pointer);
  printf("Actual address of variable => %p\n",&variable);
  return 0;

}