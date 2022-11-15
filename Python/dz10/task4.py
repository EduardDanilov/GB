# прогноз погоды

from tkinter import *
import requests

root = Tk()

def get_weather():
    city = cityField.get()
    key = 'bdf4e67142240daa4214c7b68790f381'
    url = 'https://api.openweathermap.org/data/2.5/weather'
    params = {'APPID': key, 'q': city, 'units': 'metric'}
    result = requests.get(url, params=params)
    weather = result.json()
    info['text'] = f'{weather["name"]} : {weather["main"]["temp"]}°C'

    # print(weather)

root['bg'] = 'yellow'
root.title("Прогноз погоды")
root.geometry('300x250')
root.resizable(width=False, height=False)

frameTop = Frame(root, bg='yellow', bd=5)
frameTop.place(relx=0.15, rely=0.15, relwidth=0.7, relheight=0.25)

frameDown = Frame(root, bg='yellow', bd=5)
frameDown.place(rely=0.4, relwidth=0.93, relheight=0.1, width=20, height=90)

cityField = Entry(frameTop, bg='white', font=40)
cityField.pack()

button = Button(frameTop, text='Смотреть погоду', command=get_weather)
button.pack()

info=Label(frameDown, bg='white', width=60, height=30, font=50)
info.pack()

root.mainloop()