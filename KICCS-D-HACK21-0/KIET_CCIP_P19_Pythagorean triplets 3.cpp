#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n,ele,sum=0;
    cin>>n;
    vector <int> a;
    for(int i=0;i<n;i++)
    {
        cin>>ele;
        a.push_back(ele);
    }
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<=a[i];j++)
        {
            for(int k=j+1;k<=a[i];k++)
            {
                sum = j*j + k*k;
                if(sum == a[i])
                    cout<<"("<<j<<","<<k<<") ";
                sum=0;
            }
        }
        cout<<"\n";
    }  
    return 0;}
