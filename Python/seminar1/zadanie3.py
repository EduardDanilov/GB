from gettext import find


inputNumber = float(input('Введите дробное число'))
print(inputNumber)

number = str(inputNumber)

findNumber = number[(number.find('.')+1)]

print(findNumber)