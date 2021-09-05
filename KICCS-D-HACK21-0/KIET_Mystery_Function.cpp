#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n,i;
    cin>>n;
    int a[n];
    for(i=n;i>0;i--)
    {
        a[i] = pow(n,i)-i;
        cout<<a[i]<<" ";
    }
  
    return 0;
}