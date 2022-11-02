# Написать программу, сортирующую список по количесву гласных в словах

user_words = ['elephant', 'mobile phone', 'best', 'bear']
letters = ['a', 'e', 'i', 'o', 'u', 'y']
user_words.sort(key=lambda x: sum(i in letters for i in x))

print(user_words)