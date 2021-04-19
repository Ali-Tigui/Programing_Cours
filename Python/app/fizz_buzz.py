def fizz_buzz(n):
    if n % 15 == 0:
        return "fizz_buzz"
    elif n % 5 == 0:
        return "buzz"
    elif n % 3 == 0:
        return "fizz"
    return n
print(fizz_buzz(int(input("Enter number : "))))
