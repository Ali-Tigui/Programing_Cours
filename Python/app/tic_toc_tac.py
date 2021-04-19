col=["1","2","3","4","5","6","7","8","9"]
game=f"\
_________________.\n\
     |     |     |\n\
  {col[0]}  |  {col[1]}  |  {col[2]}  |\n\
_____|_____|_____|\n\
     |     |     |\n\
  {col[3]}  |  {col[4]}  |  {col[5]}  |\n\
_____|_____|_____|\n\
     |     |     |\n\
  {col[6]}  |  {col[7]}  |  {col[8]}  |\n\
_____|_____|_____|\n\
"
print(game)

player1 = " "
T = '.'
i = 1

while not(player1.lower() in "xo"):
    player1 = input("Enter X or O :")
while i<9 and T:
    player2 = "XO".replace(player1.upper(),"")
    for n in range(3):
        if col[n]==col[n+3]==col[n+6]==player2 or col[n]==col[n+1]==col[n+2]==player2 or col[0]==col[4]==col[8]==player2 or col[2]==col[4]==col[6]==player2:
                T = ""
                print('game over  player 2 win!')
                
    if T !="":
        move1 = int(input("player 1 Enter location :"))
        col[move1-1]=player1.upper()
        game = f"\
_________________.\n\
     |     |     |\n\
  {col[0]}  |  {col[1]}  |  {col[2]}  |\n\
_____|_____|_____|\n\
     |     |     |\n\
  {col[3]}  |  {col[4]}  |  {col[5]}  |\n\
_____|_____|_____|\n\
     |     |     |\n\
  {col[6]}  |  {col[7]}  |  {col[8]}  |\n\
_____|_____|_____|\n\
"
        print(game)
        for n in range(3):
            if col[n]==col[n+3]==col[n+6]==player1.upper() or col[n]==col[n+1]==col[n+2]==player1.upper() or col[0]==col[4]==col[8]==player1.upper() or col[2]==col[4]==col[6]==player1.upper():
                T = ""
                print('game over  player 1 win!')
    if T != "":  
        move2 = int(input ("player 2 Enter location : "))
        col[move2-1] = player2
        game = f"\
_________________.\n\
     |     |     |\n\
  {col[0]}  |  {col[1]}  |  {col[2]}  |\n\
_____|_____|_____|\n\
     |     |     |\n\
  {col[3]}  |  {col[4]}  |  {col[5]}  |\n\
_____|_____|_____|\n\
     |     |     |\n\
  {col[6]}  |  {col[7]}  |  {col[8]}  |\n\
_____|_____|_____|\n\
"
        print(game)
        i+=1
    else:
        break
