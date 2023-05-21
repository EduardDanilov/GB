# Игра в крестики-нолики
import random
import sys

def hello():
    print("Игра в крестики-нолики")
    print("Чтобы играть нажми 1")
    print("Для выхода нажми 2")
    x = int(input("Введи цифру: "))
    if x == 1:
        start()
    else: 
        print('Выход')
        sys.exit()

def start():
    print('################################################################################################')
    print('')
    print('    Добро пожаловать в игру "крестики-нолики"')
    print('    Чтобы поместить ваш символ на поле, введите цифру, соответстующую номеру клетки')
    print(f'    Первый ход делает {who_is_first}')
    print('')
    print('################################################################################################')
    if who_is_first == 'Пользователь': 
        print_field()
        change_queue(1)
    elif who_is_first == 'Бот':
        change_queue(0)

def change_queue(var):
    queue = ''
    if var == 1:
        queue = 1
        user_choice()
    elif var == 0: 
        queue = 0
        bot_choice()
    elif var == 3:
        if queue == 0:
            queue = 1
            user_choice()
        elif queue == 1:
            queue = 0
            bot_choice()

def bot_choice():
    if field[4][0] == 7:
        field[4][0] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[0][4] == 3:
        field[0][4] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[4][4] == 9:
        field[4][4] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[2][2] == 5:
        field[2][2] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[0][0] == 1:
        field[0][0] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[0][2] == 2:
        field[0][2] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[2][0] == 4:
        field[2][0] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[2][4] == 6:
        field[2][4] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)
    elif field[4][2] == 8:
        field[4][2] = 0
        print('Бот сделал ход')
        print('')
        print_field()
        check_win()
        change_queue(1)

def user_choice():
    choice = int(input("Выберите номер свободной ячейки: "))
    print('Вы сделали выбор')
    print('')
    for i in range(len(field)):
        for j in range(len(field[i])):
            try:
                if field[i][j] == choice and field [i][j] != 0: 
                    field[i][j] = 'X'
            except: print('Место занято')
    print_field()
    check_win()
    change_queue(0)    

def check_win():
    if (field[0][0] == 'X' and field[0][2] == 'X' and field[0][4] == 'X') \
        or (field[2][0] == 'X' and field[2][2] == 'X' and field[2][4] == 'X') \
        or (field[4][0] == 'X' and field[4][2] == 'X' and field[4][4] == 'X') \
        or (field[0][0] == 'X' and field[2][0] == 'X' and field[4][0] == 'X') \
        or (field[0][2] == 'X' and field[2][2] == 'X' and field[4][2] == 'X') \
        or (field[0][4] == 'X' and field[2][4] == 'X' and field[4][4] == 'X') \
        or (field[0][4] == 'X' and field[2][2] == 'X' and field[4][0] == 'X') \
        or (field[0][0] == 'X' and field[2][2] == 'X' and field[4][4] == 'X'):
        print('Пользователь выиграл!')
        start_position()
    elif (field[0][0] == 0 and field[0][2] == 0 and field[0][4] == 0) \
        or (field[2][0] == 0 and field[2][2] == 0 and field[2][4] == 0) \
        or (field[4][0] == 0 and field[4][2] == 0 and field[4][4] == 0) \
        or (field[0][0] == 0 and field[2][0] == 0 and field[4][0] == 0) \
        or (field[0][2] == 0 and field[2][2] == 0 and field[4][2] == 0) \
        or (field[0][4] == 0 and field[2][4] == 0 and field[4][4] == 0) \
        or (field[0][4] == 0 and field[2][2] == 0 and field[4][0] == 0) \
        or (field[0][0] == 0 and field[2][2] == 0 and field[4][4] == 0):
        print('Бот выиграл!')
        start_position()
    elif field[0][0] == 1 or field[0][2] == 2 or field[0][4] == 3 or field[2][0] == 4 \
        or field[2][2] == 5 or field[2][4] == 6 or field[4][0] == 7 or field[4][2] == 8 or field[4][4] == 9:
        print('Продолжаем играть')
        print('')
        change_queue(3)
    else: 
        print('Ничья')
        start_position()

def print_field():
    for i in range(len(field)):
        for j in range(len(field[i])):
            print(field[i][j], end=' ')
        print()

def start_position():
    field[0][0] = 1
    field[0][2] = 2
    field[0][4] = 3
    field[2][0] = 4
    field[2][2] = 5
    field[2][4] = 6
    field[4][0] = 7
    field[4][2] = 8
    field[4][4] = 9
    print('Конец игры! Спасибо за внимание!')
    hello()


field = [[1, ' |', 2, '|', 3], ['---|---|---'], [4, ' |', 5, '|', 6], ['---|---|---'], [7, ' |', 8, '|', 9]]

who_is_first = random.choice(['Пользователь', 'Бот'])


hello()
