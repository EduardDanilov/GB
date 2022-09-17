def f (a):
    return(a**2)

spisok = [1, 2, 3, 5, 8, 15, 23, 38]

list = [(i, f(i)) for i in spisok if i%2 == 0]
print (list)