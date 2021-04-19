#n = int(input("Enter stop number : "))
#a = 0
#for i in range(0,n+1,2):
#    print(i)
#    a += 1
#print(f"you have {a} even number between 0 and {n}")
#___________Method 2_________________________________
n = int(input("Enter top number : "))
a = 0
for i in range(n):
    if i % 2 == 0:
       print(i)
       a += 1
print(f"you have {a} even number between 0 and {n}")
