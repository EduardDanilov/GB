# Напишите программу, которая найдёт сумму элементов списка, стоящих на нечётной позиции

user_list = [2, 3, 5, 9, 3, 2, 5, 2, 1, 2]

def SumOfOddNumbers (list):
    '''Находит сумму элементов списка, стоящих на нечетной позиции'''
    sum = 0
    i = 1
    while i < len(list):
        sum += list[i]
        i += 2
    return sum

print(SumOfOddNumbers(user_list))