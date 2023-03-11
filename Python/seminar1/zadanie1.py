# Написать алгоритм, создающий список из 10 случайных чисел и выводящий максимальное из них
from random import randint
numbers = [randint(-20, 20) for i in range(10)]
print(numbers)
max = numbers[0]
for i in numbers:
    if i > max:
        max = i
print(max)