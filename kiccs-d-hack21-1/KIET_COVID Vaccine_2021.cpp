#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <math.h>
using namespace std;
int main() {
    int q,n,i,j,count=0;
    float d;
    cin>>q;
    for(i=0;i<q;i++)
    {
        cin>>n>>d;
        int a[n];
        for(j=0;j<n;j++)
        {
            cin>>a[j];
            if((a[j]>=80) || (a[j]<=9))
            {
                count++;
            }
        }
            float day=0;
    day = count/d;
    cout<<round(day)<<"\n";
        count=0;
    } 
    return 0;
}