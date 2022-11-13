from tkinter import *
from tkinter import ttk
import new_contact as ncw
import del_contact as dcw
import controller
import csv

list_contacts = []

def all_contacts():
    # list_contacts = []
    with open ("dz7-8\contacts.csv", newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file, delimiter=',')
        for row in reader:
            contact_name = row['Name']
            contact_surname = row['Surname']
            contact_phone = row['Phone']
            contact_comment = row['Comment']
            new_contact = [f"Контакт:\n \
                Имя: {contact_name}\n \
                Фамилия: {contact_surname}\n \
                Номер телефона: {contact_phone}\n \
                Комментарий: {contact_comment}\n"]
            list_contacts.append(new_contact)
            lbl2.configure(text=list_contacts)



root = Tk()
root.geometry('600x450') # Рамер окна
# root['bg'] = 'white' # Задний фон
root.title('Контакты') # Название программы


# Первый фрейм (верхний)
frame1 = Frame(root)
frame1.pack(side=TOP, expand=False, fill=X)
frame1.grid_propagate(0)

# Второй фрейм (слева)
frame2 = Frame(root)
frame2.pack(side='left', expand=False, fill=BOTH)
frame2.grid_propagate(0)   

# Третий фрейм (справа)
frame3 = Frame(root)
frame3.pack(side='left', expand=True, fill=BOTH)
frame3.grid_propagate(0)    

# Блок перед строкой поиска
lbl1 = Label(frame1, width=15) 
lbl1.pack(side=LEFT, padx=5) #

# Строка поиска
findContact = Entry(frame1)
findContact.pack(fill=X, pady=10) #


lbl2 = Label(frame3, text=f"Сведения о контакте\n\n", anchor=NW, justify=LEFT, font=("Arial", 13), width=100, height=100)
lbl2.pack(side=TOP, padx=10, pady=10) #


# Кнопки
Button(lbl1, text="Найти контакт", pady=4, width=15).pack()
Button(frame2, text="Посмотреть список контактов", pady=5, width=30, command=all_contacts).pack()
Button(frame2, text="Добавить контакт", pady=5, width=30, command=ncw.addContactWindow).pack()
Button(frame2, text="Изменить контакт", pady=5, width=30).pack()
Button(frame2, text="Удалить контакт", pady=5, width=30, command=dcw.delContactWindow).pack()
Button(frame2, text="Выход", pady=5, command=root.destroy, width=30).pack()




# root.resizable(width=False, height=False)
root.mainloop()