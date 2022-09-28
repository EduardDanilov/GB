# Задайте натуральное число N. Напишите программу, которая составит список простых множителей числа N

def razlozhenie (inputNumber: int) -> list:
    newList = []
    i = 2
    while i < inputNumber:
        if inputNumber % i == 0:
            newList.append(i)
            inputNumber = inputNumber // i
        elif inputNumber % i != 0:
            i += 1
            if inputNumber % i == 0:
                newList.append(i)
                inputNumber = inputNumber // i
    return newList

userNumber = int(input('Введите число, для которого необходимо вычислить простые множители: '))
print(razlozhenie(userNumber))