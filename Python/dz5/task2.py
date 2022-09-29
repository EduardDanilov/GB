# Создайте программу для игры с конфетами человек против человека.
# Условие задачи: На столе лежит 2021 конфета(или сколько вы зададите). 
# Играют два игрока делая ход друг после друга. Первый ход определяется жеребьёвкой. 
# За один ход можно забрать не более чем 28 конфет(или сколько вы зададите). 
# Тот, кто берет последнюю конфету - проиграл.

import random

def zherebevka():
    players = ['player1', 'player2']
    return random.choice(players)

def frazochki():
    fraza = ['тебе повезло, ты начинаешь игру!', 'ты первый! Вперед к победе!', 'ходи первым!', 'первый ход за тобой!']
    return random.choice(fraza)

user1 = input('Представься, игрок №1: ')
user2 = input('Представься, игрок №2: ')
vsego_konfet = int(input('Введите общее количество конфет: '))
mozhno_brat = int(input('Введите сколько конфет можно брать за 1 раз: '))
min = 1

print(f'Приветствую вас, {user1} и {user2}!')
print(f'На столе перед вами лежат {vsego_konfet} конфет.')
print(f'За один ход можно брать не более {mozhno_brat} конфет.')
print('Кто берет последнюю конфету - проиграл!')
print('Право первого хода определит жеребьевка! Удачи!')

if zherebevka() == 'player1':
    print(f'{user1}, {frazochki()}')
else: print(f'{user2}, {frazochki()}')

max = vsego_konfet
while min < max:
    vvod_konfet = int(input('Введи количество конфет, которое ты хочешь взять: '))
    if vvod_konfet <= mozhno_brat:
        max = max - vvod_konfet
        if min < max:
            print(f'осталось {max} конфет')
        if max == min:
            print('игрок, осталась одна конфета. Ты проиграл. Нам очень жаль')
        if max < min or max == 0:
            print('Ты забрал все конфеты и проиграл')
    else: print(f'Ты взял слишком много конфет! Возьми не более {mozhno_brat} конфет')
    