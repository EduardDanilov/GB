#Загрузчик видео с ютуб

from pytube import YouTube

link = 'https://www.youtube.com/watch?v=0KSOMA3QBU0&list=PL42ul_c02f1c939CXBwEMBc7KSCeyG13X&index=1' # ссылка на видео

yt = YouTube(link) 


def only_audio():
    audio_best = yt.streams.filter(only_audio=True).desc().first()
    audio_best.download()

def video_360():
    video360 = yt.streams.filter(progressive=True, file_extension='mp4', res='360p').desc().first()
    video360.download()

def video_480():
    video480 = yt.streams.filter(progressive=True, file_extension='mp4', res='480p').desc().first()
    video480.download()

def video_720():
    video720 = yt.streams.filter(progressive=True, file_extension='mp4', res='720p').desc().first()
    video720.download()

# Раскомментировать функцию и скачать в нужном фомате
# only_audio()
# video_360()
# video_480()
# video_720()


# Для скачивания своего формата:

# Смотри список доступных форматов
# stream = yt.streams.filter(only_audio=False)#
# for i in stream:
#     print(i)

# В tag вставь выбранное значение itag из полученного списка 
# tag = ''
# stream = yt.streams.get_by_itag(tag)
# stream.download()