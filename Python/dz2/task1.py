#Программа принимает на вход число и выдает сумму его цифр

inputNumber = input('Введите число: ')
listStringNumbers = list(inputNumber)
listIntNumbers = []
sum = 0
if inputNumber.isdigit():
    for i in listStringNumbers:
        if i == '-' or i == ',' or i == '.':
            i == ' '
        else: listIntNumbers.append(int(i))
else:
    print("Надо вводить только число. Нельзя вводить буквы и символы!")
    
for i in listIntNumbers:
    sum += i
print(sum)
