#Принять на вход число, каждый элемент возвести в квадрат, вывести слитые числа

def foo(num):
    input_number = str(num)
    numbers = list(map(lambda x: int(x)**2, input_number))
    res = ''
    for i in numbers:
        res += str(i)
    return res

print(foo(9119))

