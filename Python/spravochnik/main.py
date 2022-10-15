
import telebot
import random
from random import randint
import config
from telebot import types, TeleBot
import csv


bot = telebot.TeleBot(config.TOKEN)


surname = ""
name = ""
phone = ""
comment = ""

@bot.message_handler(commands=['help', 'start'])
def help_message(message):
    bot.send_message(message.chat.id, "Бот умеет делать:\n \
/new_contact - новый контакт\n \
/find_contact - найти контакт\n \
/list - вывод списка всех контактов\n")


@bot.message_handler(commands=['new_contact'])
def new_surname(message):
    msg = bot.send_message(message.chat.id, "Введи фамилию:")
    bot.register_next_step_handler(msg, check_surname)

def check_surname(message):
    chat_id = message.chat.id
    text = message.text
    if text.isalpha():
        global surname
        surname = text
        new_name(message)
    if not text.isalpha():
        msg = bot.send_message(chat_id, "Введи фамилию корректно")
        bot.register_next_step_handler(msg, check_surname)

def new_name(message):
    msg = bot.send_message(message.chat.id, "Введи имя:")
    bot.register_next_step_handler(msg, check_name)

def check_name(message):
    chat_id = message.chat.id
    text = message.text
    if text.isalpha():
        global name
        name = text
        new_number(message)
    if not text.isalpha():
        msg = bot.send_message(chat_id, "Введи имя корректно")
        bot.register_next_step_handler(msg, check_name)

def new_number(message):
    msg = bot.send_message(message.chat.id, "Введи номер телефона:")
    bot.register_next_step_handler(msg, check_number)

def check_number(message):
    chat_id = message.chat.id
    text = message.text
    if text.isdigit():
        if len(text) != 11:
            msg = bot.send_message(chat_id, "Номер телефона должен состоять из 11 цифр в формате YYYYXXXXXXX")
            bot.register_next_step_handler(msg, check_number)
        else:
            global phone
            phone = text
            new_comment(message)
    if not text.isdigit():
        msg = bot.send_message(chat_id, "Введи номер телефона из ЦИФР")
        bot.register_next_step_handler(msg, check_number)

def new_comment(message):
    msg = bot.send_message(message.chat.id, "Введи комментарий:")
    bot.register_next_step_handler(msg, check_comment)

def check_comment(message):
    chat_id = message.chat.id
    text = message.text
    global comment
    comment = text
    add_contact()
    bot.send_message(message.chat.id, "Контакт сохранен")

def add_contact():
    user_data = [[surname, name, phone, comment]]
    with open("data.csv", "a", encoding="utf-8", newline="") as file:
        writer = csv.writer(file, delimiter=",")
        writer.writerows(user_data)


@bot.message_handler(commands=['list'])
def all_contacts(message):
    with open ("data.csv", newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file, delimiter=',')
        i = 1
        for row in reader:
            contact_surname = row['surname']
            contact_name = row['name']
            contact_phone = row['phone']
            contact_comment = row['comment']
            bot.send_message(message.chat.id, f"Контакт №{i}:\n \
                                                Фамилия: {contact_surname}\n\
                                                Имя: {contact_name}\n \
                                                Номер телефона: {contact_phone}\n \
                                                Комментарий: {contact_comment}\n")
            i+=1

@bot.message_handler(commands=['find_contact'])
def find_contact(message):
    msg = bot.send_message(message.chat.id, "Введи параметры поиска (фамилию / имя / номер телефона / комментарий):")
    bot.register_next_step_handler(msg, search)

def search(message):
    search_parameter = message.text
    with open ("data.csv", newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file, delimiter=',')
        i = 1
        for row in reader:
            if search_parameter in row:
                contact_surname = row['surname']
                contact_name = row['name']
                contact_phone = row['phone']
                contact_comment = row['comment']
                bot.send_message(message.chat.id, f"Контакт №{i}:\n \
                                                    Фамилия: {contact_surname}\n\
                                                    Имя: {contact_name}\n \
                                                    Номер телефона: {contact_phone}\n \
                                                    Комментарий: {contact_comment}\n")
            i+=1



print('server started')


bot.polling(none_stop=True)
bot.infinity_polling()