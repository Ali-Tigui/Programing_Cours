a = 1
while a == 1 or a == 2 or a == 3:
    num1 = float(input("Enter number 1 : "))
    num2 = float(input("Enter number 2 : "))
    a = int(input("Enter operation you want it to happen \n[1] for addition\n[2] for substraction\n[3] for multiplication\n*>"))
    if a == 1:
        R = num1 + num2
    elif a == 2:
        R = num1 - num2
    elif a==3:
        R = num1 * num2
    else:
        break
    print(R)
print("+-+-+-+- End -+-+-+-+")
