a = 0
list1 = []
list2 = []
while a == 0 or a == 1 or a == 2 or a == 3 or a==4:
    a = int(input("start manipulate list element Enter \n[1]: for add element.\n[2]: for remove element\n\
[3]: for create other list\n[4]: for print final result \n*>"))
    if a == 1:
        i = 0
        b = int(input('how much element you want add :'))
        while i < b:
            list1.append(input('Enter element you want add to the list : '))
            i += 1
    elif a == 2:
        b = int(input("Enter :\n[1]: if you want remove last element \n[2]: if you want remove spcifique element \n*>"))
        if b == 1:
            list1.pop()
        elif b == 2:
            list1.remove(input("enter element you  want remove : "))
    elif a == 3:
        i = 0
        leng = int(input("Enter list length : "))
        while i < leng:
            list2.append(input("Enter element : "))
            i += 1
    elif a == 4:
        print("\n", list1, "\n", list2)
print("End")
