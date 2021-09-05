#include<iostream>
#include<vector>
using namespace std;

void butterfly(int n)
{
    int arr[n][n];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            arr[i][j] = 0;
    
    for (int i = 0; i < n; i++)
        arr[i][n-1-i] = 2*n-1;
    for (int i = 0; i < n; i++)
        arr[i][i] = n;

    for (int i = 1; i < n-1; i++)
        arr[i][0] = 2*i;
    
    for (int i = 1; i < n-1; i++)
        for (int j = 1; j <= i && j < n-i; j++)
            if (arr[i][j] == 0)
                arr[i][j] = arr[i][j-1] + 1;

    for (int i = 1; i < n-1; i++)
        arr[i][n-1] = (n-1)*i;
    
    for (int i = 1; i < n-1; i++)
        for (int j = n-2; j >= i && j >= n-i; j--)
            if (arr[i][j] == 0)
                arr[i][j] = arr[i][j+1] - i;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (arr[i][j] == 0)
                cout<<" "<<" ";
            else
                cout<<arr[i][j]<<" ";
        }
        cout<<'\n';
    }
    
}

int main()
{
    int n;
    cin>>n;
    if (n==0)
        cout<<"0"<<'\n';
    else
        butterfly(n);
    return 0;
}