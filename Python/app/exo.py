import math
s=0
b=1
N=int(input('number : '))
while N >= b:
    if (N/b - math.floor(N/b)) == 0 :
        s=s+1
    b=b+1
print('the number of diviseur is s is ',s)
