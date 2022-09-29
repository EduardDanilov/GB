# Напишите программу, удаляющую из текста все слова, содержащие ""абв"".
# 'абвгдейка - это передача' = >" - это передача"

user_text = 'абвгдейка - это передача где есть игрокиабвгдейки'

def filter_for_text (data: str) -> list:
    '''Возвращает текст без элемента, указанного в фильтре'''
    text = data.split()
    filtration_text = 'абв' # можно подставить ввод текста пользователем
    final_text = list(filter(lambda x: True if filtration_text not in x else False, text))
    return final_text

print(filter_for_text(user_text))