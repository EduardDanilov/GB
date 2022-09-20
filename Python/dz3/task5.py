# Негафибоначчи

def fibo_positive(n):
    if n <= 1:
        return n
    else:
        return fibo_positive(n-1) + fibo_positive(n-2)

def fibo_negative(n):
    if n == 0:
        return 1
    elif n == 1:
        return -1
    else:
        return fibo_negative(n-2) - fibo_negative(n-1)

list_positive = []
list_negative = []

n = 8

for i in range(n+1):
    list_positive.append(fibo_positive(i))

for i in range(n):
    list_negative.append(fibo_negative(i))

print(list_positive)
print(list_negative)

all_fibonacci_numbers = list_negative[::-1]+list_positive
print(all_fibonacci_numbers)