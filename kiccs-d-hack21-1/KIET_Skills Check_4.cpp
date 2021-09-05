#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#define ll long long int
using namespace std;


int main() {

    ll t;
    cin>>t;
    while(t--){
        ll a,d,k,n,i;
        cin>>a>>d>>k>>n>>i;
        for(int j=1; j<n; j++){
            if(j%k == 0)
                d += i;
            a += d;
        }
        cout<<a<<endl;
    }
   
    return 0;
}