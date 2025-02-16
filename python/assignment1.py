#greatest common divisor

def gcd(n1,n2):
    l1=[]
    for i in range(1,n2):
        if n1%i==0 and n2%i==0:
            l1.append(i)
    return l1[-1]

print(gcd(24,18))

n1=int(input())
n2=int(input())
l1=[]
for i in range(1,n2):
    if n1%i==0 and n2%i==0:
        l1.append(i)
print(l1[-1])

#factorial

n=int(input("Enter Number:"))
fact=1
if n>0:
    for i in range(1,n+1):
        fact*=i
else:
    fact=1

print(fact)

