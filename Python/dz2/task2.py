"""  Напишите программу, которая принимает на вход число N и выдает 
набор произведений (набор - это список) чисел от 1 до N.
Не используйте функцию math.factorial.
Добавьте проверку числа N: чтобы пользователь не мог ввести буквы. """

inputNumber = input('Введите число: ')

print(f'Input value: {inputNumber}')

if (inputNumber.isdigit() == True):
    product = 1
    productList = []
    for i in range(1, int(inputNumber) + 1):
        product *= i
        productList.append(product)
    print(productList)
else: print(f'Invalid value "{inputNumber}"! Must be number only.')