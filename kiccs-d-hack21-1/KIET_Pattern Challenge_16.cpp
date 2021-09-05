#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            if (j==1 || j==i)
                cout<<(char)(j+64);
            else
                cout<<j-1;
        }
        cout<<'\n';
    }
    
    return 0;
}