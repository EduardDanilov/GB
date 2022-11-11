import new_contact as nc
import csv
from tkinter import *


def write_contact():
    with open("dz7-8\contacts.csv", mode="a", encoding='utf-8', newline='') as file:
        file_writer = csv.writer(file, delimiter = ",", lineterminator="\n")
        file_writer.writerow(nc.newContact)
    nc.newContact = []


def all_contacts():
    list_contacts = []
    with open ("dz7-8\contacts.csv", newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file, delimiter=',')
        i = 1
        for row in reader:
            contact_name = row['Name']
            contact_surname = row['Surname']
            contact_phone = row['Phone']
            contact_comment = row['Comment']
            new_contact = [f"Контакт №{i}:\n \
                    Фамилия: {contact_surname}\n \
                    Имя: {contact_name}\n \
                    Номер телефона: {contact_phone}\n \
                    Комментарий: {contact_comment}\n"]
            list_contacts.append(new_contact)
            i+=1
    return list_contacts

output = all_contacts()