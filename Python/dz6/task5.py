# Найти произведение пар чисел в списке. Парой считаем первый и последний элемент, второй и предпоследний и т.д.

list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

i = 0
j = -1
a = 0
new_list = []
while i < len(list) / 2:
    a = list[i] * list[j]
    new_list.append(a)
    i+=1
    j-=1

print(new_list)