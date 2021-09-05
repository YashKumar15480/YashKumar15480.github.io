#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int x1,x2,x3,x4,y1,y2,y3,y4;
    cin>>x1>>y1;
    cin>>x2>>y2;
    cin>>x3>>y3;
    cin>>x4>>y4;
    int minx=0,maxx=0,miny=0,maxy=0;
    if(x1>x2 && x1>x3)
        maxx = x1;
    else if(x2>x1 && x2>x3)
        maxx = x2;
    else
        maxx = x3;
    if(x1<x2 && x1<x3)
        minx = x1;
    else if(x2<x1 && x2<x3)
        minx = x2;
    else
        minx = x3;
    if(y1>y2 && y1>y3)
        maxy = y1;
    else if(y2>y1 && y2>y3)
        maxy = y2;
    else
        maxy = y3;
    if(y1<y2 && y1<y3)
        miny = y1;
    else if(y2<y1 && y2<y3)
        miny = y2;
    else
        miny = y3;

    if((x4>minx && x4<maxx) && (y4>=miny && y4<maxy))
            cout<<"caught";
    else
            cout<<"not caught";
    
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}
