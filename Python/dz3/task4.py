# Напишите программу, которая будет преобразовывать десятичное число в двоичное


a = 456 

def transformation (input_number):
    '''Преобразует десятичное число в двоичное'''
    binary = []
    while input_number > 0:
        ostatok = input_number % 2
        binary.append(int(ostatok))
        input_number = input_number // 2
    result = int(''.join(map(str, binary[::-1])))
    return result

print(transformation(a))