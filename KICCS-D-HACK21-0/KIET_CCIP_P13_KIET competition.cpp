#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int *a = new int[n];
    for (int i = 0; i < n; i++)
    {
        cin>>a[i];
    }
    int shirt = 0;
    for (int i = 0; i < n; i++)
    {
        int p = a[i];
        if(p >= 16)
        {
            shirt++;
            p-=16;
        }
        if(p >= 8)
        {
            shirt++;
            p-=8;
        }
        if(p >= 4)
        {
            shirt++;
            p-=4;
        }
        if(p >= 2)
        {
            shirt++;
            p-=2;
        }
        if(p >= 1)
        {
            shirt++;
            p-=1;
        }
    }
    cout<<shirt;
    return 0;
}