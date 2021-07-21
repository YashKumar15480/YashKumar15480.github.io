#include<stdio.h>
#include<conio.h>

#define max 5
#define lVALUE -1
struct stack { int s[max]; int top;}st;

int stackFULL();
int stackEMPTY();
void push(int);
int pop();
void display();

void main()
{
    int item,k;
    st.top=lVALUE;

    printf("\n Stack Implementation");

    do
    {
         printf("\nMAIN MENU");
         printf("\nPUSH   => 1");
         printf("\nPOP    => 2");
         printf("\nDISPLAY=> 3");
         printf("\nEXIT   => 4");

         printf("\nSelect an operation ==> "); scanf("%d",&k);

         switch(k)
         {
             case 1:  printf("\n Enter the item to push/add ==> "); scanf("%d",&item);
                      (stackFULL())? printf("\nStack is OverFlow"): push(item);
                      break;

             case 2: if (stackEMPTY()) printf("\nStack UnderFlow");
                     else
                        {
                          item=pop();
                          printf("\nThe poped element is %d",item);
                          break;
                        }

             case 3: display(); break;

             case 4: printf("\nEnd of program. BYE BYE ");
         }
    } while (k!=4);
    getch();
}


int stackFULL()
     {
        if(st.top>=max-1) 
           return 1; 
               else 
           return 0;
    }

int stackEMPTY()
     {
        if(st.top==lVALUE) 
           return 1; 
               else 
           return 0;
     }

void push(int item)
    {
      st.top++; 
      st.s[st.top]=item;
    }

int pop() 
    {
      int item;
      item=st.s[st.top]; 
      st.top--; 
      return item;
    }

void display() 
    {
       int i; 
       (stackEMPTY()) ? printf("Stack is empty !") : printf ("elements of stack ="); 
       
       for(i=st.top;i>=0;i--) printf("=> %d",st.s[i]);
    }
