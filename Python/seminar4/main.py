import numbers
from random import randint


#friends = ['max', 'leo', 'twix']

#for friend in friends:
#    for letter in friend:
#        print(letter)


numbers = [randint(-20,20) for i in range(10)]
print(numbers)
max = numbers[0]
for i in numbers:
    if i > max:
        max = i
    
print(max)  