# Алгоритм пузырковой сортировки
from random import randint
import time


def BubbleSort(array):
    length = len(array)
    for i in array:
        for j in range(0, length -1):
            if array[j] > array[j+1]:
                array[j], array[j +1] = array[j+1], array[j]


unsorted_list = []
count_of_unsorted_numbers = 5000
for i in range(count_of_unsorted_numbers):
    unsorted_list.append(randint(1, 5000))



# print(unsorted_list)
start = time.time()
BubbleSort(unsorted_list)
# print(unsorted_list)
end = time.time() - start
print(end)