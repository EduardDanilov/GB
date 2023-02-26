Написать скрипт, возвращающий список имен (только firstname) пользователей без повторений в алфавитном порядке.

SELECT firstname FROM users GROUP BY firstname



Выведите мужчин старше 35 лет

SELECT *, (YEAR(CURRENT_DATE) - YEAR(birthday)) AS age
FROM profiles
WHERE (birthday + interval 34 YEAR) < NOW()
ORDER BY birthday DESC;



Выведите количество мужчин старше 35 лет

SELECT COUNT(*) FROM profiles WHERE (birthday + interval 34 YEAR) < NOW();



Из таблиц users, profiles вывести список (id, имя, фамилия, год рождения, возраст, домашний адрес, дата регистрации)

SELECT user_id, firstname, lastname, gender, birthday, (YEAR(CURRENT_DATE) - YEAR(birthday)) AS age, hometown, created_at
FROM profiles
LEFT JOIN users
ON users.id = profiles.user_id
ORDER BY user_id



Сколько заявок в друзья в каждом статусе?

SELECT status, COUNT(*) FROM friend_requests GROUP BY status



Выведите номер пользователя, который отправил больше всех заявок в друзья

SELECT initiator_user_id, count(*) AS count 
FROM friend_requests
GROUP BY initiator_user_id
ORDER BY count DESC
LIMIT 1