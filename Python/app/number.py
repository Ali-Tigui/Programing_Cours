numbers={
"1":"One",
"2":"Tow",
"3":"Tree",
"4":"Four",
"5":"Five",
"6":"Six",
"7":"Seven",
"8":"Eight",
"9":"Nine",
}
result=""
while True:
     number=input("Enter number : ")
     for i in number:
         result+=numbers[i]+" "
     print(result)
     flag=input("Press q if you want quit... ").lower()
     if flag == "q":
        break
        
