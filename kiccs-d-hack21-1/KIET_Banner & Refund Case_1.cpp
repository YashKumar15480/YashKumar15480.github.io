#include<iostream>
#include<vector>
using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<int> v(n);
        for (int i = 0; i < n; i++)
        {
            cin>>v[i];
        }
        int five = 0, ten = 0, fifteen = 0, flag = 1;
        for (int i = 0; i < n; i++)
        {
            if (v[i] == 5)
            {
                five++;
            }
            else if (v[i] == 10 && five > 0)
            {
                ten++;
                five--;
            }
            else if (v[i] == 15 && (ten > 0 || five > 1) )
            {
                if (ten > 0)
                    ten--;
                else
                    five-=2;
                fifteen++;
            }
            else
            {
                flag = -1;
                break;
            }
        }
        if (flag == -1)
            cout<<"NO"<<'\n';
        else
            cout<<"YES"<<'\n';
    }
    return 0;
}