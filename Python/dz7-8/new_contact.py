from tkinter import *
from tkinter import messagebox
import controller

newContact = []

def addContactWindow():

    def push():
        new_name = name.get()
        newContact.append(new_name)
        new_surname = surname.get()
        newContact.append(new_surname)
        new_phone = phone.get()
        newContact.append(new_phone)
        new_comment = comment.get()
        newContact.append(new_comment)
        controller.write_contact()
        messagebox.showinfo('', 'Контакт успешно добавлен')
        window.destroy()


    window = Tk()
    window.title("Сохранение нового пользователя")
    window.geometry('400x150')
    
    name = Entry(window, width=20)
    name.grid(column=1, row=0, sticky=E+W)
    lblName = Label(window, width=20, text="Введите имя")
    lblName.grid(column=0, row=0)

    surname = Entry(window, width=20)
    surname.grid(column=1, row=1, sticky=E+W)
    lblSurname = Label(window, text="Введите фамилию")
    lblSurname.grid(column=0, row=1)

    phone = Entry(window, width=20)
    phone.grid(column=1, row=2, sticky=E+W)
    lblPhone = Label(window, text="Введите номер телефона")
    lblPhone.grid(column=0, row=2)

    comment = Entry(window, width=20)
    comment.grid(column=1, row=3, sticky=E+W)
    lblComment = Label(window, text="Комментарий")
    lblComment.grid(column=0, row=3)

    okButton = Button(window, text="Добавить контакт", command=push)
    okButton.grid(column=0, row=5)

    cancelButton = Button(window, text="Отмена", command=window.destroy)
    cancelButton.grid(column=1, row=5)




    window.mainloop()