def encrypter():
    '''Возвращает зашифрованный текст'''
    
    russian_words = 'абвгдеёжзиклмнопрстуфхцчшщъыьэюя'
    english_words = 'abcdefghijklmnopqrstuvwxyz'
    
    language = input('Введите язык текста (русский или английский): ')
    user_text = input('Введите выражение: ').lower()
    key = int(input('Введите ключ шифрования: '))
    
    if (language.lower() == "английский" or language.lower() == "english" or language.lower() == "eng"):
        words = english_words
    else: 
        words = russian_words

    encrypted_text = ''
    for i in user_text:
        new_mesto = words.find(i) + key
        if i in words:
            encrypted_text += words[new_mesto]
        else:
            encrypted_text += i
    
    file = open('encrypted.txt', 'w+', encoding="utf8")
    file.writelines(encrypted_text)
    file.close()

    return encrypted_text

encrypter()