import random
import variables
from random import randint

def about_game():
    return """Правила игры в конфеты:
Перед вами на столе лежит некоторое количество конфет. 
Каждый игрок, делая ход, должен взять минимум одну конфету, но не более, чем разрешено брать.
Игроки делают ходы поочередно.
Право первого хода определяет жеребьевка.
Проигрывает тот игрок, который взял последнюю конфету"""

def frazochki():
    fraza = ['тебе повезло, ты начинаешь игру! Вводи количество конфет, которое ты берешь', 
            'ты первый! Вперед к победе! Вводи количество конфет, которое ты берешь', 
            'ходи первым! Вводи количество конфет, которое ты берешь', 
            'первый ход за тобой! Вводи количество конфет, которое ты берешь']
    return random.choice(fraza)

def check() -> int:
    while True:
        a = input('input number: ')
        if a.isdigit(): return int(a)
        else: print('Надо вводить только положительные числа больше 0')

def queue():
    return random.randint(0,1)

def player_step(value) -> str:
   
    if value > variables.bot_can_take:
        return f"Слишком много конфет, можно взять максимум {variables.bot_can_take}"
    else:
        variables.total_candies -= value
    if variables.total_candies > 1:
        variables.global_queue = 1
    return f"Вы взяли {value} конфет\nОсталось {variables.total_candies} конфет"

def bot_step() -> str:
    bot_value = bot_logic(number)
    variables.total_candies -= bot_value
    if variables.total_candies > 1:
        variables.global_queue = 0
    return f"Бот взял {bot_value} конфет\nОсталось {variables.total_candies} конфет"

number = variables.total_candies
def bot_logic(number):
    n = randint(1, variables.bot_can_take)
    if number - n == variables.minimum + 2:
        n = 2
    return n
