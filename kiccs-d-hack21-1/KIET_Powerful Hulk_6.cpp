#include<iostream>
using namespace std;

int returnSteps(int n){
    int setBit = 0;
    while(n){
        if(n & 1){
            setBit++;
        }
        n = n>>1;
    }
    return setBit;
}

int main(int argc, char const *argv[])
{
    int test;
    cin>>test;
    while(test){
        int n;
        cin>>n;
        cout<<returnSteps(n)<<endl;
        test--;
    }
    return 0;
}