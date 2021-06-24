#include<stdio.h>
#include<conio.h>
#include<dos.h>
#include<stdlib.h>
#include<graphics.h>
void main()
{
 int i=0,n;
 int gd =DETECT,gm;
 initgraph(&gd,&gm,"c:\\turboc3\\bgi");

 setcolor(GREEN);
 line(0,300,700,300);  //wheels sss
setcolor(WHITE);
  circle(100,285,15);
   circle(200,285,15);
   setcolor(CYAN);
    circle(100,285,5);
     circle(200,285,5);
   setcolor(LIGHTRED);

   line(65,285,85,285);
   line(115,285,185,285);
   line(215,285,235,285);
   line(65,285,65,260);
   line(235,285,235,260);

   line(65,260,100,255);
   line(235,260,200,255);
   line(100,255,115,235);
   line(200,255,185,235);
   line(115,235,185,235);

   line(179,238,152,238);
   line(152,255,152,238);
   line(152,255,177,255);
   line(177,239,177,255);
   outtextxy(150,226,"CAR");


    printf("PRESS 1 TO MOVE =>");scanf("%d",&n);
     if(n==1)
     {
 setcolor(WHITE);
 for(i=0;i<=300;i+=20)
 {
 setcolor(GREEN);
 line(0,300,700,300);  //wheels
setcolor(WHITE);
  circle(100+i,285,15);
   circle(200+i,285,15);
   setcolor(CYAN);
    circle(100+i,285,5);
     circle(200+i,285,5);
   setcolor(LIGHTRED);

   line(65+i,285,85+i,285);
   line(115+i,285,185+i,285);
   line(215+i,285,235+i,285);
   line(65+i,285,65+i,260);
   line(235+i,285,235+i,260);

   line(65+i,260,100+i,255);
   line(235+i,260,200+i,255);
   line(100+i,255,115+i,235);
   line(200+i,255,185+i,235);
   line(115+i,235,185+i,235);

   line(179+i,238,152+i,238);
   line(152+i,255,152+i,238);
   line(152+i,255,177+i,255);
   line(177+i,239,177+i,255);
   outtextxy(150+i,226,"CAR");

   delay(300);
   cleardevice();
   }

   getch();
 }
 }