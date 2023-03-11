# Алгоритм сортировки выбором

from random import randint
import time


def directSort(array):
    length = len(array)
    for i in range(length -1):
        minIndex = i
        for j in range (i+1, length):
            if array[j] < array[minIndex]:
                minIndex = j
        array[i], array[minIndex] = array[minIndex], array[i]
    

unsorted_list = []
count_of_unsorted_numbers = 5000
for i in range(count_of_unsorted_numbers):
    unsorted_list.append(randint(1, 5000))


# print(unsorted_list)
start = time.time()
directSort(unsorted_list)
# print(unsorted_list)

end = time.time() - start
print(end)