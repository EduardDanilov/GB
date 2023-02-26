-- Вывести количество групп у пользователей

SELECT CONCAT(firstname, ' ', lastname) AS owner, count(*)
FROM users AS u
JOIN users_communities AS uc ON u.id = uc.user_id
GROUP BY u.id
ORDER BY count(*) desc



-- Количество пользователей в каждом сообществе
SELECT communities.name, COUNT(*)
FROM users_communities
JOIN communities ON users_communities.community_id = communities.id
GROUP BY communities.id