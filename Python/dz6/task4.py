#Определить, позицию второго вхождения строки в списке либо сообщить, что его нет.

from queue import Empty
# Определить, позицию второго вхождения строки в списке либо сообщить, что её нет

list = ["qwe", "qwe", "asd", "qwe", "zxc", "ertqwe", "qwe"]

def f (list: list, item):
    all_indexes = [i for i, x in enumerate(list) if x == item]
    if len(all_indexes) < 2: 
        return -1
    else: 
        return all_indexes[1]
    

print(f(list, 'qwe'))