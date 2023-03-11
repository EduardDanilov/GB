#Алгоритм быстрой сортировки

from random import randint
import random
import time

def quicksort(nums):
   if len(nums) <= 1:
       return nums
   else:
       q = random.choice(nums)
   l_nums = [n for n in nums if n < q]
 
   e_nums = [q] * nums.count(q)
   b_nums = [n for n in nums if n > q]
   return quicksort(l_nums) + e_nums + quicksort(b_nums)


unsorted_list = []
count_of_unsorted_numbers = 5000
for i in range(count_of_unsorted_numbers):
    unsorted_list.append(randint(1, 5000))


start = time.time()
quicksort(unsorted_list)
end = time.time() - start
print(end)