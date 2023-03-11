# Алгоритм сортировки вставками
from random import randint
import time

def insterSort(array):
    for i in range(len(array) -1):
        for j in range(0, len(array)):
            if array[i] < array[j]:
                array[i], array[j] = array[j], array[i]
        

unsorted_list = []
count_of_unsorted_numbers = 5000
for i in range(count_of_unsorted_numbers):
    unsorted_list.append(randint(1, 5000))


# print(unsorted_list)
start = time.time()
insterSort(unsorted_list)
# print(unsorted_list)

end = time.time() - start
print(end)