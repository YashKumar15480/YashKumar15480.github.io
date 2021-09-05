#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

string rev(int n){
        string str = to_string(n);
        reverse(str.begin(), str.end());
        return str;
    }

int main() {
    
    int n, countin=0, countde=0;
    bool flagin = false, flagde = false;
    string max_string, min_string, temp;
    
    cin>>n;
    int k = n;
    temp = rev(n);
    if(temp == to_string(n)){
        cout<<temp;
    }
    else{
        while(flagin!=true){
            n++;
            countin++;
            temp = rev(n);
            if(temp == to_string(n)){
                max_string = temp;
                flagin = true;
            }
        }
        n = k;
        while(flagde!=true){
            n--;
            countde++;
            temp = rev(n);
            if(temp == to_string(n)){
                min_string = temp;
                flagde = true;
            }
        }
        if(countin == countde){
            cout<<min_string;
        }
        else if(countin<countde){
            cout<<max_string;
        }
        else if(countin>countde){
            cout<<min_string;
        }
    }  
    
    return 0;
}