import random

manufacturer = 'iPhone'
product_name = ['3G', '3GS', '4', '4s', '5', '5C', '5S', '6', '6 Plus', '6S', '6S Plus', 'SE', '7', '7 Plus', '8', '8 Plus', 'X', 'XS', 'XS Max', 'XR', 'Pro 11', '11 Pro Max', '11', 'SE 2020', '12 Pro', '12 Pro Max', '12', '12 Mini', '13 Pro', '13 Pro Max', '13', '13 Mini', '14', '14 Plus', '14 Pro Max', 'Pro']

for i in product_name:
    product_count = random.randint(0,100)
    price = str(random.randint(10000,100000))+'.'+str(random.randint(0,100))
    with open("iphone_values.txt", "a") as file:
        file.write(f"('{manufacturer}', '{i}', {product_count}, {price}),\n")