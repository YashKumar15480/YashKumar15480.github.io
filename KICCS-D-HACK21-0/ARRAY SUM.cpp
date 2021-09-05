#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() 
{
    
    int n,i,j,t,p;
    cin>>n;
    t=0; p= 0; i=n; 
    
    while(i>0)
    {
        t=t+(i%10);
        i=i/10;
    }
      for(i=2;i<=n;i++)
      {
          if(n%i == 0)
          {
              if(i>9)
              {
                  j =i;
                  while(j>0)
                  {
                      p = p+j%10;
                      j= j/10;
                  }
              }
              else{
                  p= p+i;
              }
              n=n/i;
              i--;
          }
      }
    
    if(p == t)
    {
        cout<<"1"<<endl;
    }
    else
    {
        cout<<"0"<<endl;
    }
    return 0;
}
