import new_contact as nc
import csv
import re
import del_contact as dcw
from tkinter import *


def write_contact():
    with open("dz7-8\contacts.csv", mode="a", encoding='utf-8', newline='') as file:
        file_writer = csv.writer(file, delimiter = ",", lineterminator="\n")
        file_writer.writerow(nc.newContact)
    nc.newContact = []


def delete_contact1():
    with open('dz7-8\contacts.csv', encoding='utf-8') as f:
        lines = f.readlines()

    sfd = dcw.delContact[0]
    pattern = re.compile(re.escape(sfd))
    with open('dz7-8\contacts.csv', 'w', encoding='utf-8') as f:
        for line in lines:
            result = pattern.search(line)
            if result is None:
                f.write(line)

def delete_contact2():
    with open('dz7-8\contacts.csv', encoding='utf-8') as f:
        lines = f.readlines()

    sfd = dcw.delContact[1]
    pattern = re.compile(re.escape(sfd))
    with open('dz7-8\contacts.csv', 'w', encoding='utf-8') as f:
        for line in lines:
            result = pattern.search(line)
            if result is None:
                f.write(line)