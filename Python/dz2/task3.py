# Напишите такую программу, которая найдет палиндром введенного пользователем числа

def reverse (argument):
    result = 0
    while argument != 0:
        number = argument % 10
        argument = argument // 10
        result = result * 10 + number
    return result

number = int(input('Введите число: '))
reverseNumber = reverse(number)
print(f'Обратное число: {reverseNumber}')

if (number == reverseNumber):
    print("Палиндром!")
else:
    print("Числа не палиндромы. Запущен поиск палиндрома")
    while (number != reverseNumber):
        number += reverseNumber
        print(f'Сумма чисел: {number}')
        reverseNumber = reverse(number)
        print(f'Обратное число: {reverseNumber}')
        if number != reverseNumber:
            print("Не палиндром. Ищем дальше")
        else:
            print(f"Найден палиндром! Это число {number}")