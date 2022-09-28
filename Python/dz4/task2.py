#Напишите программу, которая выведет список неповторяющихся элементов исходной последовательности

inputList = [2,2,2,2,2,5,5,5,5,5,3,3,3,7,7,1,2,9]

newList = []

for i in inputList:
    if i not in newList:
        newList.append(i)

print(newList)