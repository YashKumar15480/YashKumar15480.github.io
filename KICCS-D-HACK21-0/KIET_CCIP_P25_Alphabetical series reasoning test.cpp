#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

string mul(char a, int n){
    string s("");
    for(int i=0;i<n;i++)
        s+=a;
    return s;    
}

int main() {
   
    int n;
    string s1,s2("");
    cin>>n;
    cin>>s1;
    for(int i=1;i<=n;i++){
        s2+=mul('a',i)+mul('b',i)+mul('c',i);
    }
    int l = s2.size() - s1.size();
    while(l!=0){
        for(int i=0,j=0;s2[i]!='\0';i++){
            if(s2[i]==s1[j]){
                j++;
            }
            else{
                cout<<s2[i];
                l--;
            }
        }
    }
    return 0;
}