# Задайте список из N элементов, заполненных числами из промежутка [-N, N].
# Найдите произведение элементов на указанных позициях. 
# Позиции вводятся через пробел в одной строкой

n = int(input("Введите количество элементов: "))
user_list = list(range(-n, n+1))
print(user_list)

user_indexes = []
user_indexes.append(input("Введите номера позиций для вычисления произведения элементов\n(ввод в строку через пробел): "))

product = 1

for i in user_indexes:
    for k in i:
        if k.isdigit():
            a = int(k)
            product *= user_list[a]


print(product)