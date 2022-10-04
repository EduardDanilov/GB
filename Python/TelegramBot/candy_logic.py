# Все, что имеет отношение к игре в конфеты

# import candy_service as main
# import functions

def init():
    global total_candies
    total_candies = 0

    global bot_can_take
    bot_can_take = 0

    global player_queue
    player_queue = 0

    global minimum
    minimum = 1


def whose_move():
    if player_queue == 0:
        return "Ваш ход"
    else:
        return "Ход бота"


def bot_step() -> str:
    global total_candies, bot_can_take, player_queue
    bot_number = bot_logic(total_candies, bot_can_take)
    total_candies -= bot_number
    if total_candies > 1:
        player_queue = 0
    return f"Бот взял {bot_number} конфет\nОсталось {total_candies} конфет\nВаш ход:"

def bot_logic(total_candies, bot_can_take) -> int:
    bot_number = (total_candies - 1) % (bot_can_take + 1)
    return bot_number


value = 5
def player_step(value) -> str:
    global total_candies, bot_can_take, player_queue
    if value > bot_can_take:
        return f"Слишком много конфет, можно взять максимум {bot_can_take}"
    else:
        total_candies -= value
    if total_candies > 0:
        player_queue = 1
    return f"Вы взяли {value} конфет\nОсталось {total_candies} конфет"

def restart() -> None:
    init()

init()