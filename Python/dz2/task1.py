#Программа принимает на вход вещественное число и выдает сумму его цифр

inputNumber = input('Введите число: ')
listStringNumbers = list(inputNumber)
listIntNumbers = []
sum = 0

for i in listStringNumbers:
    if i.isdigit(): listIntNumbers.append(int(i))

    
for i in listIntNumbers:
    sum += i
print(sum)
