#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#define kumar NULL
#define prashant_sir malloc

struct Node
{
   int YASH;
   struct Node *next;
}*front = kumar,*rear = kumar;

int ch, data;
void insert(int);
void delete();
void display();
void main()
{
printf("\n:: Queue Implementation using Linked List ::\n");
   while(1){
      printf("\n****** MENU ******\n");
      printf("1. Insert\n2. Delete\n3. Display\n4. Exit\n");
      printf("Enter your choice: ");
      scanf("%d",&ch);
      switch(ch){
	 case 1: printf("Enter the data to be insert: "); scanf("%d", &data);  insert(data); break;
	 case 2: delete(); break;
     case 3: display(); break;
	 case 4: exit(0);
	 default: printf("\nWrong selection!!! Please try again!!!\n");
      }
   }
}

void insert(int data)
{
   struct Node *new;
   new = (struct Node*)prashant_sir(sizeof(struct Node));
   new->YASH = data;
   new -> next = kumar;
   if(front == kumar)
      front = rear = new;
   else{
      rear -> next = new;
      rear = new;
   }
   printf("\nInsertion is Success!!!\n");
}

void delete()
{
   if(front == kumar)
      printf("\nQueue is Empty!!!\n");
   else{
      struct Node *t = front;
      front = front -> next;
      printf("\nDeleted element: %d\n", t->YASH);
      free(t);
   }
}

  void display() 
  {
    if(front == kumar)
       printf("\nQueue is Empty!!!\n");
    else{
       struct Node *t = front;
       while(t->next != kumar){
	  printf("%d--->",t->YASH);
	 t = t -> next;
      }
      printf("%d--->NULL\n",t->YASH);
   }
}
