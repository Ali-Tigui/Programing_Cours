
while True:
    try:
        a=10/float(input("enter number"))
    except ZeroDivisionError:
        print("you can't divide by 0")
    except ValueError:
        print("incorrect value")
    else:
        print(a)
