from tkinter import *
from tkinter import messagebox
import controller

delContact = []

def delContactWindow():

    def push():
        del_surname = surname.get()
        delContact.append(del_surname)
        del_phone = phone.get()
        delContact.append(del_phone)
        controller.delete_contact1()
        controller.delete_contact2()
        messagebox.showinfo('', 'Контакт удален')
        window.destroy()


    window = Tk()
    window.title("Удаление контакта")
    window.geometry('300x70')

    surname = Entry(window, width=20)
    surname.grid(column=1, row=1, sticky=E+W)
    lblSurname = Label(window, text="Введите фамилию")
    lblSurname.grid(column=0, row=1)

    phone = Entry(window, width=20)
    phone.grid(column=1, row=2, sticky=E+W)
    lblPhone = Label(window, text="Введите номер телефона")
    lblPhone.grid(column=0, row=2)

    okButton = Button(window, text="Удалить контакт", command=push)
    okButton.grid(column=0, row=5)

    cancelButton = Button(window, text="Отмена", command=window.destroy)
    cancelButton.grid(column=1, row=5)


    window.mainloop()

print(delContact)