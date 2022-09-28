# Реализуйте RLE алгоритм: реализуйте модуль сжатия и восстановления данных. 
# Входные и выходные данные хранятся в отдельных текстовых файлах

with open('user_file.txt', 'r', encoding=("utf8")) as file:
    text = file.read()

def encode (data):
    
    if data != '':
        encode_text = ''
        i = 0
        while i < len(data):
            count = 1
            while i + 1 < len(data) and data[i] == data[i + 1]:
                count += 1
                i += 1
            encode_text += str(count) + data[i]
            i += 1

        with open('encode.txt', 'w', encoding=("utf8")) as file:
            file.writelines(encode_text)
    
    else: print('Значения для обработки не переданы!')

encode(text)


def decode():
    with open('encode.txt', 'r') as file:
        input_text = file.read()
    
    decode_text = ''
    count = ''
    for i in input_text:
        if i.isdigit():
            count += i
        else: 
            decode_text += i * int(count)
            count = ''
    
    with open('decode.txt', 'w', encoding=("utf8")) as file:
        file.writelines(decode_text)

decode()
