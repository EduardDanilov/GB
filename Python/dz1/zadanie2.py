#¬(X ⋁ Y ⋁ Z) = ¬X ⋀ ¬Y ⋀ ¬Z
from xmlrpc.client import boolean

X = bool(input('input X (True/False): '))
Y = bool(input('input Y (True/False): '))
Z = bool(input('input Z (True/False): '))

a = True
b = True

if (X == False and Y == False and Z == False):
    a = False
else: a = True

if (not a == (not X) or (not Y) or (not Z)):
    print('True')
else: print('False')
