# Реализовать выдачу случайного числа, не используя random
def random (min, max):

    from datetime import datetime
    from gettext import find
    import math

    time_now = str(datetime.now().time()) #показывает текущее время с переводом в строку
    numbers_from_time = list(time_now) #создает список с символами и цифрами
    dot_index = numbers_from_time.index('.') #находит индекс точки
    list_numbers = numbers_from_time[dot_index+1:] #создает список с цифрами после точки
    pre_number = ''.join(list_numbers) #конкатенация цифр в списке
    work_number = int(pre_number) #перевод из строки в число

    print(work_number)

    if work_number > min and work_number < max:
        return work_number
    else: 
        if min == work_number == max:
            return work_number
    
        if min == max:
            work_number = max
            
        while work_number < min:
            work_number = math.trunc(work_number * max / min)     
     
        while work_number > max:
            work_number = math.trunc(work_number / max * min)
    return work_number 
    
                                 
#проверка:

print(random(100, 500))
print(random(10, 90))
print(random(1000, 3000))
print(random(58294, 802874))
print(random(25, 27))
print(random(273, 300))