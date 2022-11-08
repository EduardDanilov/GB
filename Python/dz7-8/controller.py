def inputText():
    user_text = input('Введите имя: ')
    allowed_chars = set('0123456789абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-!')
    if set(user_text).issubset(allowed_chars):
        if user_text.isdigit():
            print("Ввод только цифр не допускается")
            inputText()
        elif user_text == '':
            print("Вы ничего не ввели")
            inputText()
        return user_text 
    else:
        print("Некорректное значение")
        inputText()
    

# def inputNumber() -> str:
#     user_number = input("Введите номер телефона: ")
#     if (user_number[0] == '+' and user_number[1:].isdigit()) or user_number.isdigit():
#         return user_number
#     elif user_number == '':
#         print('Вы ничего не ввели')
#         inputNumber()
#     else:
#         user_number = ''
#         print('Допускается ввод цифр и символа "+" на первой позиции')
#         inputNumber()

# def inputNumber():
#     phone_number = str(input('Введите номер телефона: '))
#     allowed_chars = set('0123456789')
#     if set(phone_number).issubset(allowed_chars):
#         return phone_number 
#     else: 
#         print('Допускается ввод только цифр')
#         inputNumber()

a = inputText()
# b = inputNumber()
print(f'stroka a {a}')
# print(f'stroka b {b}')
# print(f"Ваша фраза {inputNumber()}")