#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

double Square(double n, double i, double j)
{
    double mid = (i+j)/2;
    double mul = mid*mid;
    if((mul == n)||(abs(mul-n)<0.00001))
        return mid;
    else if(mul<n)
        return Square(n,mid,j);
    else
        return Square(n,i,mid);
}

     void findSqrt(double n)
     {
         double i=1;
         bool found = false;
         while(!found)
         {
             if(i*i==n)
             {
               cout<<fixed<<setprecision(0)<<i;
                 found = true;
                 
             }
               
         else if(i*i>n)
         {
             double res = Square(n,i-1,i);
             cout<<fixed<<setprecision(5)<<res;
             found = true;
             
         }
           i++;
         }
     }
int logn(int n, int r)
{
    return(n>r-1)?1+logn(n/r,r):0;
}



int main()
{
    int c;
    cin>>c;
    int ans =1,n,x,y;
    switch(c)
    {
        case 1: double num; cin>>num; findSqrt(num); break;
        case 2: cin>>x>>y; for(int i=1;i<=y;i++) { ans = ans*x;} cout<<ans; break ;
        case 3: cin>>x; for(int i=1;i<=x;i++) { ans=ans*i; } cout<<ans; break;
        case 4: cin>>n; for(int i=1;i<=n;i++){ans=ans*2;} cout<<ans; break;
        case 5: cin>>x>>y; ans = logn(x,y); cout<<ans; break; 
        default: break;
            
    }       
    return 0;
}

            
