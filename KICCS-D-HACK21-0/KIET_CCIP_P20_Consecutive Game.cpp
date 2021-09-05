#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin>>a[i];
    }
    sort(a,a+n);
    int flag = 0;
    for (int i = 0; i < n-1; i++)
    {
        if(a[i+1] - a[i] != 1)
        {
            flag =1;
            break;
        }
    }
    if(flag == 0)
        cout<<1;
    else
    {
        cout<<0;
    }
    
    
    return 0;
}