# В файле, содержащем фамилии студентов и их оценки, 
# изменить на прописные буквы фамилии тех студентов, 
# которые имеют средний балл более «4».
# Нужно перезаписать файл

file = open('text.txt', 'r', encoding="utf8")
text = file.read()
file.close()

newList = []

for i in text.split('\n'):
    if '5' in i:
        i = i.upper()
        newList.append(i + '\n')

file = open('text2.txt', 'w', encoding="utf8")
file.writelines(newList)
file.close()