#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
     string str;
    int len=0,count=0;
    cin>>str;
    len=str.length();
    for(int i=0;i<len;i++)
    {
        if(!isalnum(str[i]))
        {
            break;
        }
        for(int j=i+1;j<len;j++)
        {
            if(str[i]==str[j])
            count++;
        }
        if(str[i]==str[i+1])
            continue;
    }
    cout<<count;
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;  }