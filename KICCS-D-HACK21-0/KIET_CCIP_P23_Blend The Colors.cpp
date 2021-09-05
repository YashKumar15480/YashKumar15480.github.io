#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n,q;
    cin>>n>>q;
    int a[n][3], b[q][3];
    for(int i=0;i<n;i++){
        for(int j=0;j<3;j++){
            cin>>a[i][j];
        }
    }
    for(int i=0;i<q;i++){
        for(int j=0;j<3;j++){
            cin>>b[i][j];
        }
    }
    int ranswer,banswer,ganswer;
    int k;
    for(int i=0;i<q;i++){
        ranswer=0;
        banswer=0;
        ganswer=0;
        for(int j=0;j<3;j++){
            k=0;
            while(k!=n){
                if(b[i][j]==a[k][j]){
                    if(j==0){
                        ranswer = 1;
                        break;
                    }
                    else if(j==1){
                        banswer=1;
                        break;
                    }
                    else if(j==2){
                        ganswer=1;
                        break;
                    }
                }
                k++;
            }
            if(j==2){
                if(ranswer==1&&banswer==1&&ganswer==1){
                    cout<<"YES"<<endl;
                }
                else{
                    cout<<"NO"<<endl;
                }
            }
        }
    }
    return 0;
}