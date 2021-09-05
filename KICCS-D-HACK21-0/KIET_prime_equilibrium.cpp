#include<bits/stdc++.h>
using namespace std;

bool isPrime(int n)
{
    for (int i = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int n;
    cin>>n;
    int diff;
    int left = n - 1;
    int right = n + 1;
    if(isPrime(n))
    {
        cout<<0;
    }
    else
    {
        while(true)
        {
            if(isPrime(right))
            {
                diff = right - n;
                break;
            }
            else if(isPrime(left))
            {
                diff = left - n;
                break;
            }
            else
            {
                left--;
                right++;
            }
        }
        cout<<diff;
    }
    
    
    
    return 0;
}