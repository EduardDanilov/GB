# Определить, присутствует ли в заданном списке строк, некоторое число

list = [1, 2, 3, 4, 5, 6, 7]

def func_for_find (numbers: list) -> bool:
    N = int(input('Введите число: '))

    return True if N in list else False

print(func_for_find(list))