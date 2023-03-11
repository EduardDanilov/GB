# Написать алгоритм, создающий список чисел от -введенного до введенного

number = int(input('Введите число: '))
a = list(range(-number, number+1))

print(a)