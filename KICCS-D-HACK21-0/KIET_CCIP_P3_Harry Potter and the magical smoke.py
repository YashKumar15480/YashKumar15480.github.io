from itertools import permutations

def calcSmoke(l,n):
    smoke = 0
    for i in range(0,n-1):
        a=l[i]
        b=l[i+1]
        l[i+1]=(a+b)%100
        smoke+=a*b
    return smoke

n = int(input())
l = list(map(int,input().split()))
perm = permutations(l)
shortSmoke = 10000000
for i in list(list(perm)):
    smoke = calcSmoke(list(i),n)
    if(smoke<shortSmoke):
        shortSmoke = smoke
        
print(shortSmoke)