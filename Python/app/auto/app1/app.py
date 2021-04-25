newlines=[]
file=open("text.txt","r")
lines=file.readlines()
file.close()
print(*lines)
for i in lines:
    if "ali" in i:
        newlines.append(i)
file=open("text1.txt","w")
file.writelines(newlines)
file.close()
j=1
file=open("text.txt","r")
lines=file.readlines()
file.close()
file=open("text3.txt","a")
for i in lines :
    file.write(str(j)+" "+i)
    j+=1
file.close()
