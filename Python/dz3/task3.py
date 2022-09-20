#Программа находит разницу между максимальным и минимальным значениями дробной части чисел

user_list = [1.1, 1.2, 3.1, 5.17, 10.02]

def Raznitsa (inputList):
    '''Функция находит разницу между максимальным и минимальным значениями дробной части чисел'''
    list_fraction = []

    for i in inputList:
        i = i%1
        list_fraction.append(round(i, 2))

    indexOfMaxElement = list_fraction.index(max(list_fraction))
    indexOfMinElement = list_fraction.index(min(list_fraction))

    result = round((list_fraction[indexOfMaxElement] - list_fraction[indexOfMinElement]), 2)    
    return result

print(Raznitsa(user_list))