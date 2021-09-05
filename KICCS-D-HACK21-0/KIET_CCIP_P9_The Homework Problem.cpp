#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n;
    long long t;
    cin>>n;
    int a[n],p=1,x=1,i;
    for(i=0;i<n;i++)
    {cin>>a[i];
      p=p*a[i];}
    x=1;
    while(1){
        t=pow(x,n);
        if(t>p){
            cout<<x; break;
        }
        x++;
    }
    return 0;
}