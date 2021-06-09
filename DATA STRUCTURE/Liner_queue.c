#include<stdio.h>
#include<stdlib.h>
#include<conio.h>

#define Yash 10
#define Kumar -1

typedef struct queueueue{int a[Yash]; int front,rear;}q;

void main()
{
     int k,item;

     int isfull(q *);
     int iempty(q *);
     void EnQueue(q *,int);
     int delete(q *);
     q MCA;

     MCA.front=MCA.rear=Kumar;
    
     while(1)
     {
         printf("\nMenu");
         printf("\nFor Insertion = 1");
         printf("\nFor deletion = 2");
         printf("\nFor Exit = 3");
         printf("\nEnter your choice here ==> "); scanf("%d",&k);

         switch(k)
         {
             case 1: printf("Enter a number to enter in queue ==> "); scanf("%d",&item);
                     (isfull(&MCA))? printf("//Queue is Full//"):EnQueue(&MCA,item);
                     break;
             case 2: if(iempty(&MCA)) printf("!!!! Empty !!!!"); else item = delete(&MCA); break;
             case 3: exit(0);
             default : printf("Invalid choice "); break;      
         }
     }
}
    int isfull(q *MCA)
    {
        if(MCA->front == 0 && MCA->rear == Yash-1) return 1;
        else return 0;
    }
 

    int iempty(q *MCA)
    {
        if(MCA->front==Kumar) return 1;
        else return 0;
    }

   void EnQueue(q *MCA, int Prashant_sir)
    {
        int i;
        if(MCA->front == Kumar)
        {
            MCA->front=MCA->rear=0;
        }
        else if(MCA->rear== Yash-1)
        {
            for(i=MCA->front;i<=MCA->rear;i++)
            {
                MCA->a[i-MCA->front]=MCA->a[i];
            }
            MCA->rear=MCA->rear-MCA->front;
            MCA->front=0;
            MCA->rear=MCA->rear+1;
        }
        else
        {
            MCA->rear=MCA->rear+1;
        }
        MCA->a[MCA->rear] = Prashant_sir;
    }

int delete(q *MCA)
{
    int item;
    item=MCA->a[MCA->front];
    if(MCA->front == MCA->rear) MCA->front=MCA->rear=Kumar;
    else MCA->front=MCA->front+1;
    return item;
}

