#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() 
{
   int n,m;
    cin>>n>>m;
    string s[n];
    
    int c[n]={0};
    int ans =0;
    for(int i=0;i<n;i++)
    {
        cin>>s[i];
    }
    for(int i=0;i<n;i++)    
    {
    for(int j=0; j<m; j++)
    {
        char ch=s[i].at(j);
        if(ch=='1')
        {
            c[i]++;
        }
    }
    }
    for(int i=0;i<n-1;i++)
    {
        ans =  ans+c[i]*c[i+1];
    }
    cout<<ans;
    return 0;
}
