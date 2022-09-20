# Напишите программу, которая найдёт произведение пар чисел списка

from itertools import product


user_list = [2, 3, 5, 6]

def ProductPair (list):
    '''Функция находит произведение пар чисел списка'''
    new_list = []

    product = 0
    i = 0
    j = -1

    while i < len(list)/2:
        product = list[i] * list[j]
        new_list.append(product)
        i+=1
        j-=1
    
    return new_list

print(ProductPair(user_list))