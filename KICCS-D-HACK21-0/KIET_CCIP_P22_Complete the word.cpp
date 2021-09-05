#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    string a,b;
    int result;

    cin>>a>>b;
    
    for(unsigned int i=0;i<a.size();i++){
        if(b.find(a[i])<b.find(a[i+1])){
            result = 1;
        }
        else{
            result = 0;
            break;
        }
    }
    cout<<result;
    return 0;
}