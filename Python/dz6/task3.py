# Найти расстояние между двумя точками в пространстве

import math

x1 = 5
y1 = 3

x2 = 4
y2 = 8

point = round(math.sqrt(((x1 - x2)**2) + ((y1 - y2)**2)), 3)
print(point)