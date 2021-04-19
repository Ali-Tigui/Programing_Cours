#a = int(input("number : "))
#b = int(input("power : "))
#s = 1
#for i in range(b):
#    s *= a
#print(s)
# using function
def pwer_t(bas,power):
    s = 1
    for i in range(power):
        s *= bas
    return s
print(pwer_t(4,2))
print(pwer_t(2,3))
