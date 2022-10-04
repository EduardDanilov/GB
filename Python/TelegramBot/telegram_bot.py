import telebot
import random
from random import randint
import config
from telebot import types, TeleBot
import functions
import variables
import candy_logic

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
    

@bot.message_handler(commands=['run_game_candies'])
def initial_step_1(message):
    bot.send_message(message.chat.id, "Добро пожаловать в игру в конфеты")
    msg = bot.send_message(message.chat.id, "Для начала определись, сколько всего будет конфет. Введите число.")
    bot.register_next_step_handler(msg, check_candies)

def initial_step_2(message):
    msg = bot.send_message(message.chat.id, "Сейчас назови количество конфет, которое можно брать за ход. Введите число.")
    bot.register_next_step_handler(msg, check_bot_can_take)
    
def queue (message):    
    if functions.queue() == 0: 
        msg = bot.send_message(message.chat.id, functions.frazochki())
        bot.register_next_step_handler(msg, candyes_game)
    else:
        bot.send_message(message.chat.id, "Первый ход бота")
        reply = candy_logic.bot_step()
        msg = bot.send_message(message.chat.id, reply)
        bot.register_next_step_handler(msg, candyes_game)


def candyes_game(message):
    chat_id = message.chat.id
    text = message.text
    if not text.isdigit():
        msg = bot.send_message(chat_id, f"Разява! Введи именно число от {candy_logic.minimum} и до {candy_logic.total_candies}")
        bot.register_next_step_handler(msg, candyes_game)
    if candy_logic.total_candies > 0:
        if candy_logic.player_queue == 0:
            reply = candy_logic.player_step(int(text))
            bot.send_message(chat_id, reply)
            bot.send_message(chat_id, candy_logic.whose_move())
            reply = candy_logic.bot_step()
        else:
            reply = candy_logic.bot_step()
        msg = bot.send_message(chat_id, reply)
        if candy_logic.total_candies <= 1:
            if candy_logic.player_queue == 0:
                msg = bot.send_message(chat_id, "Вы победили!")
            else:
                msg = bot.send_message(chat_id, "Победил бот. В следующий раз повезет!")
            candy_logic.restart()
            bot.register_next_step_handler(msg, initial_step_1)
        bot.register_next_step_handler(msg, candyes_game)

def check_candies(message) -> str:
    chat_id = message.chat.id
    text = message.text
    if text.isdigit() and text.isdigit() > 0:
        candy_logic.total_candies = int(text)
        bot.send_message(message.chat.id, f'Доступно {candy_logic.total_candies} конфет')
        initial_step_2(message)
    if not text.isdigit():
        msg = bot.send_message(chat_id, "Введи ЦИФРАМИ (положительными, строго больше 0) количество конфет!")
        bot.register_next_step_handler(msg, check_candies) 

def check_bot_can_take(message):
    chat_id = message.chat.id
    text = message.text
    if text.isdigit() and text.isdigit() > 0:
        candy_logic.bot_can_take = int(text)
        bot.send_message(message.chat.id, f'Можно брать не более {candy_logic.bot_can_take} конфет')
        bot.send_message(message.chat.id, f'Провожу жеребьевку')
        queue(message)
    if not text.isdigit():
        msg = bot.send_message(chat_id, "Введи ЦИФРАМИ (положительными, строго больше 0) количество конфет!")
        bot.register_next_step_handler(msg, check_bot_can_take) 

@bot.message_handler(commands=['menu'])
def menu(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    item1 = types.KeyboardButton('Игра в конфеты')
    item2 = types.KeyboardButton('Орел/решка')
    item3 = types.KeyboardButton('Курсы валют')
    item4 = types.KeyboardButton('Помощь')
    test_button = types.KeyboardButton('TECT')
    markup.add(item1, item2, item3, item4, test_button)
    bot.send_message(message.chat.id, 'Добро пожаловать в меню, {0.first_name}!'.format(message.from_user), reply_markup = markup)
    

@bot.message_handler(content_types=['text'])

def bot_message(message):
    if message.chat.type == 'private':
        # if message.text == 'TECT':
        #     keyboard = types.InlineKeyboardMarkup()
        #     test_button = types.InlineKeyboardButton(url="https://stackoverflow.com", text="Go to StackOverflow")
        #     keyboard.add(test_button)
        #     bot.send_message(message.chat.id, "Button 1 handler", reply_markup=keyboard)
        if message.text == 'Игра в конфеты':
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton(text = 'Играть')
            item2 = types.KeyboardButton('Описание игры')
            back_button = types.KeyboardButton('Назад')
            markup.add(item1, item2, back_button)
            bot.send_message(message.chat.id, 'Игра в конфеты', reply_markup = markup)
        elif message.text == 'Играть':
                bot.send_message(message.chat.id, 'Нажми на кнопку снизу')
                bot.send_message(message.chat.id, '/run_game_candies')
        elif message.text == 'Описание игры':
                bot.send_message(message.chat.id, functions.about_game())
        elif message.text == 'Орел/решка':
            bot.send_message(message.chat.id, random.choice(variables.orel_or_reshka))
        elif message.text == 'Помощь':
            bot.send_message(message.chat.id, '/help')
        elif message.text == 'Курсы валют':
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item4 = types.KeyboardButton(text = 'Лучшие курсы')
            item1 = types.KeyboardButton('Доллар США')
            item2 = types.KeyboardButton('Евро')
            item3 = types.KeyboardButton('Российский рубль')
            back_button = types.KeyboardButton('Назад')
            markup.add(item1, item2, item3, item4, back_button)
            bot.send_message(message.chat.id, 'Курсы валют', reply_markup = markup)
        elif message.text == 'Назад':
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton('Игра в конфеты')
            item2 = types.KeyboardButton('Орел/решка')
            item3 = types.KeyboardButton('Курсы валют')
            item4 = types.KeyboardButton('Помощь')
            markup.add(item1, item2, item3, item4)
            bot.send_message(message.chat.id, 'Главное меню', reply_markup = markup)
        elif message.text == 'Лучшие курсы':
            keyboard = types.InlineKeyboardMarkup()
            test_button = types.InlineKeyboardButton(url="https://myfin.by/currency/minsk", text="Лучшие курсы валют")
            keyboard.add(test_button)
            bot.send_message(message.chat.id, "Переходи по ссылке:", reply_markup=keyboard)
        
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