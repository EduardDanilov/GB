# Задайте список из n чисел последовательности
# (1 + 1 \ n)^n и выведите на экран их сумму.

n = int(input("Введите число: "))
list_of_numbers = list(range(1, n+1))
print(list_of_numbers)
new_list = []
for i in list_of_numbers:
    i = round(((1 + 1 / i)**i), 2)
    new_list.append(i)
print(new_list)
print(sum(new_list))
