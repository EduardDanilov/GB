
import telebot
import random
from random import randint
import config
from telebot import types, TeleBot
import functions
import variables

bot = telebot.TeleBot(config.TOKEN)


@bot.message_handler(commands=['start'])
def send_start(message):
	bot.send_message(message.chat.id, 'Приветствую тебя! Подробная информация в справке (/help) или в меню (/menu)')


@bot.message_handler(commands=['help'])
def help(message):
	bot.send_message(message.chat.id, """Этот бот умеет:
    - играть в конфеты;
    - крутить монету (орел или решка)
    /menu - основное меню;
    справка будет дополнена""")
    

@bot.message_handler(commands=["run_game"])

def candies_game_start(message):
    chat_id = message.chat.id
    text = message.text
    msg = bot.send_message(chat_id, "Для начала определитесь, сколько всего будет конфет. Введите число.")
    bot.register_next_step_handler(msg, check)

def check(message):
    chat_id = message.chat.id
    text = message.text
    if text.isdigit() and text.isdigit() > 0:
        msg = bot.send_message(chat_id, "По техническим причинам ввод придется повторить :(")
        bot.register_next_step_handler(msg, total_candies_at_the_beginning)
    if not text.isdigit():
        msg = bot.send_message(chat_id, "Введи ЦИФРАМИ (положительными, строго больше 0) количество конфет!")
        bot.register_next_step_handler(msg, check)

def total_candies_at_the_beginning(message):
    chat_id = message.chat.id
    text = message.text
    variables.total_candies = int(text)
    bot.send_message(chat_id, f'Итак, всего вам доступно {variables.total_candies} конфет')
    if variables.total_candies != 0:
        candies_game_step2(message)

def candies_game_step2(message):
    chat_id = message.chat.id
    text = message.text
    msg = bot.send_message(chat_id, "Теперь давай договоримся о максимальном числе конфет, которое можно брать. Введите число.")
    bot.register_next_step_handler(msg, check2)

def check2(message):
    chat_id = message.chat.id
    text = message.text
    if text.isdigit() and text.isdigit() > 0:
        msg = bot.send_message(chat_id, "По техническим причинам ввод придется повторить :(")
        bot.register_next_step_handler(msg, how_much_bot_can_take)
    if not text.isdigit():
        msg = bot.send_message(chat_id, "Введи ЦИФРАМИ (положительными, строго больше 0) количество конфет!")
        bot.register_next_step_handler(msg, check2)

def how_much_bot_can_take(message):
    chat_id = message.chat.id
    text = message.text
    variables.bot_can_take = int(text)
    bot.send_message(chat_id, f'Можно брать не более {variables.bot_can_take} конфет')
    bot.send_message(chat_id, 'Сейчас пройдет жеребьевка и определится игрок, который сделает первый ход')
    if variables.bot_can_take != 0:
        queue_function(message)

def queue_function (message):
    chat_id = message.chat.id
    text = message.text
    queue = functions.queue()
    if queue == 0:
        bot.send_message(message.chat.id, functions.frazochki())
    if queue == 1:
        variables.global_queue = 1
    while variables.total_candies > 0:
        if variables.global_queue == 0:
            # queue = variables.global_queue 
            reply = functions.player_step(int(text))
            bot.send_message(chat_id, reply)
            if variables.total_candies <= 1:
                bot.send_message(chat_id, 'Ты проиграл')
            reply = functions.bot_step()
        
        elif variables.global_queue == 1:
            # queue = variables.global_queue
            bot.send_message(message.chat.id, "Бот ходит первым")
            reply = functions.bot_step()
            bot.send_message(chat_id, reply)
            if variables.total_candies <= 1:
                bot.send_message(chat_id, 'Бот проиграл')


@bot.message_handler(commands=['menu'])
def menu(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    item1 = types.KeyboardButton('Игра в конфеты')
    item2 = types.KeyboardButton('Орел/решка')
    item3 = types.KeyboardButton('Курсы валют')
    item4 = types.KeyboardButton('Помощь')
    markup.add(item1, item2, item3, item4)
    bot.send_message(message.chat.id, 'Добро пожаловать в меню, {0.first_name}!'.format(message.from_user), reply_markup = markup)
    

@bot.message_handler(content_types=['text'])
def bot_message(message):
    if message.chat.type == 'private':
        if message.text == 'Игра в конфеты':
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton('Играть')
            item2 = types.KeyboardButton('Описание игры')
            back_button = types.KeyboardButton('Назад')
            markup.add(item1, item2, back_button)
            bot.send_message(message.chat.id, 'Игра в конфеты', reply_markup = markup)
        elif message.text == 'Играть':
                bot.send_message(message.chat.id, '/run_game')
        elif message.text == 'Описание игры':
                bot.send_message(message.chat.id, functions.about_game())
        elif message.text == 'Орел/решка':
            bot.send_message(message.chat.id, random.choice(variables.orel_or_reshka))
        elif message.text == 'Помощь':
            bot.send_message(message.chat.id, '/help')
        elif message.text == 'Курсы валют':
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton('Доллар США')
            item2 = types.KeyboardButton('Евро')
            item3 = types.KeyboardButton('Российский рубль')
            back_button = types.KeyboardButton('Назад')
            markup.add(item1, item2, item3, back_button)
            bot.send_message(message.chat.id, 'Курсы валют', reply_markup = markup)
        elif message.text == 'Назад':
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton('Игра в конфеты')
            item2 = types.KeyboardButton('Орел/решка')
            item3 = types.KeyboardButton('Курсы валют')
            item4 = types.KeyboardButton('Помощь')
            markup.add(item1, item2, item3, item4)
            bot.send_message(message.chat.id, 'Главное меню', reply_markup = markup)
        
        elif message.text.lower() == 'hi':
            bot.send_message(message.chat.id, random.choice(variables.hi_words))
        elif message.text.lower() == 'привет':
            bot.send_message(message.chat.id, random.choice(variables.hi_words))
        elif message.text.lower() == 'hello':
            bot.send_message(message.chat.id, random.choice(variables.hi_words))
        
        elif message.text.lower() == 'bye':
            bot.send_message(message.chat.id, random.choice(variables.gb_words))
        elif message.text.lower() == 'goodbye':
            bot.send_message(message.chat.id, random.choice(variables.gb_words))
        elif message.text.lower() == 'пока':
            bot.send_message(message.chat.id, random.choice(variables.gb_words))





print('server started')


bot.polling(none_stop=True)
bot.infinity_polling()