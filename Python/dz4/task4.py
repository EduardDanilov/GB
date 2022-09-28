# Шифр цезаря. 
# Создает файл с зашифрованным текстом,
# затем создает файл с дешифрованным текстом

def encrypter():
    '''Возвращает зашифрованный текст'''
    
    russian_words = 'абвгдеёжзиклмнопрстуфхцчшщъыьэюяабвгдеёжзиклмнопрстуфхцчшщъыьэюя'
    english_words = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'

    language = input('Введите язык текста (русский или английский): ')
    user_text = input('Введите выражение: ')
    key = int(input('Введите ключ шифрования: '))
    
    if (language.lower() == "английский" or language.lower() == "english" or language.lower() == "en" or language.lower() == "eng"):
        words = english_words
    else: 
        words = russian_words

    encrypted_text = ''
    for i in user_text:
        letter_index = words.find(i)
        new_letter_index = letter_index + key
        if i in words:
            encrypted_text += words[new_letter_index]
        else:
            encrypted_text += i
    
    file = open('encrypted.txt', 'w+', encoding="utf8")
    file.writelines(encrypted_text)
    file.close()

encrypter()

def decrypter():
    '''Возвращает зашифрованный текст'''
    
    russian_words = 'абвгдеёжзиклмнопрстуфхцчшщъыьэюяабвгдеёжзиклмнопрстуфхцчшщъыьэюя'
    english_words = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    
    language = input('Введите язык текста (русский или английский): ')
    key = int(input('Введите ключ дешифрования: '))
    
    if (language.lower() == "английский" or language.lower() == "english" or language.lower() == "eng"):
        words = english_words
    else: 
        words = russian_words
    
    file = open('encrypted.txt', 'r', encoding="utf8")
    encrypted_text = file.read()
    file.close()
    
    decrypted_text = ''
    for i in encrypted_text:
        letter_index = words.find(i)
        new_letter_index = letter_index - key
        if i in words:
            decrypted_text += words[new_letter_index]
        else:
            decrypted_text += i
    
    file = open('decrypted.txt', 'w+', encoding="utf8")
    file.writelines(decrypted_text)
    file.close()

decrypter()