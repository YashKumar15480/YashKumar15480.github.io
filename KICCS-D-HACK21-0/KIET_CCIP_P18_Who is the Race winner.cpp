#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int a[n][2];
    int max = 0, index = -1;
    for (int i = 0; i < n; i++)
    {
        cin>>a[i][0]>>a[i][1];
        if(a[i][1] > max)
        {
            max = a[i][1];
            index = i;
        }
    }
    cout<<a[index][0];
    
    return 0;
}