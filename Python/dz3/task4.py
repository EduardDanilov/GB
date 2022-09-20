# Напишите программу, которая будет преобразовывать десятичное число в двоичное


a = 4685 

def perevod (input_number):
    '''Преобразует десятичное число в двоичное'''
    dvoichnoe = []
    while input_number > 0:
        ostatok = input_number % 2
        dvoichnoe.append(int(ostatok))
        input_number = input_number // 2
    result = int(''.join(map(str, dvoichnoe[::-1])))
    return result

print(perevod(a))