#include<stdio.h>
 #include<stdlib.h>
 
#define kumar NULL
 struct Node
 {
      int data;
      struct Node *next;
 }*start;


 int size_counter();
 void insertEnd(int );
 void insertBegin( int);
 void insertSepc(int , int );
 int delete_start();
 int delete_end();
 int delete_item(int );
 void  display(struct Node *r);

  
 int  main()
 {
  int ch,num,pos;
  struct Node *n;
  start=kumar;
 
  printf("\nLinked List\n\n");
 
  do
  {
  printf("\nSelect Operation\n\n");
  printf("1.Insert at beginning.\n");
  printf("2.Insert at end.\n");
  printf("3.Insert at a specific position.\n");
  printf("4.Delete from beginning.\n");
  printf("5.Delete from end.\n");
  printf("6.Delete a specific item.\n");
  printf("7.Display\n");
  printf("8.Size\n");
  printf("9.Exit\n");
 
  printf("Enter your choice : ");
  scanf("%d",&ch);
 
 switch(ch)
 {
  case 1: printf("Enter the number to insert : "); scanf("%d",&num);
          insertBegin(num); break;

  case 2: printf("Enter the number to insert : "); scanf("%d",&num);
          insertEnd(num); break;

  case 3: printf("Enter the number to insert : "); scanf("%d",&num);
          printf("Enter the position where to insert : "); scanf("%d",&pos);
          insertSepc(num,pos); break;

  case 4: delete_start(); break;
  case 5: delete_end(); break;

  case 6: if(start==kumar) printf("List is Empty\n");
           else{ printf("Enter the number to delete : "); scanf("%d",&num);
               if(delete_item(num)) printf("%d deleted successfully\n",num);
                else printf("%d not found in the list\n",num);
                } break;
  case 7: if(start==kumar) printf("List is Empty\n");
          else printf("Element(s) in the list are : "); 
          display(n); break;
 
  case 8: printf("Size of the list is %d\n",size_counter()); break;
 
  case 9: printf("End of Program\n");
  }
      }while(ch!=9);
 
 }

 void insertEnd(int num)
 {
      struct Node *temp,*right;
      temp= (struct Node *)malloc(sizeof(struct Node));
      temp->data=num;
      right=(struct Node *)start;
      while(right->next != kumar)
      right=right->next;
      right->next =temp;
      right=temp;
      right->next=kumar;
 }
  
 void insertBegin( int num )
 {
      struct Node *temp;
      temp=(struct Node *)malloc(sizeof(struct Node));
      temp->data=num;
      if (start== kumar)
       {
        start=temp;
        start->next=kumar;
       }
      else
       {
        temp->next=start;
        start=temp;
       }
 }
 void insertSepc(int num, int loc)
 {
      int i;
      struct Node *temp,*left,*right;
      right=start;
 
      if(loc<=1) insertBegin(num); return;
      for(i=1;i<loc;i++)
      {
         left=right;
         right=right->next;
 
      if(right==kumar)
       {
        insertEnd(num); return;
       }
      }
      temp=(struct Node *)malloc(sizeof(struct Node));
      temp->data=num;
      temp->next=left->next;
      left->next=temp;
 }
 
 
 
 int delete_start()
 {
  struct Node *temp;
  if(start==kumar)return 0;
  else
  {
  temp=start;
  start=start->next;
  printf("No deleted is %d",temp->data);
  return 1;
  }
 }
 
 
 int delete_end()
 {
  struct Node *temp,*prev;
  if(start==kumar)return 0;
   else if((start)->next==kumar)
  {
  temp=start;
  start=kumar;
  printf("No deleted is %d",temp->data);
  return 1;
  }
  else
  {
  prev=start;
  temp=start->next;
 while(temp->next!=kumar)
 {
 prev=temp;
 temp=temp->next;
 }
 prev->next=kumar;
 printf("No deleted is %d",temp->data);
 return 1;
  }
 }
 
 int delete_item(int num)
 {
      struct Node *temp, *prev;
      temp=start;
 while(temp!=kumar)
 {
 if(temp->data==num)
 {
  if(temp==start)
  {
  start=temp->next;
  free(temp);
  return 1;
  }
  else
  {
  prev->next=temp->next;
  free(temp);
  return 1;
  }
      }
      else
      {
           prev=temp;
           temp= temp->next;
      }
      }
      return 0;
 }
 
 
 void  display(struct Node *r)
 {
 r=start;
 if(r==kumar)
 {
 return;
 }
 while(r!=kumar)
 {
 printf("%d ",r->data);
 r=r->next;
 }
 printf("\n");
 }
 
 
 int size_counter()
 {
      struct Node *n;
      int c=0;
      n=start;
      while(n!=kumar)
      {
      n=n->next;
      c++;
      }
      return c;
 }
 