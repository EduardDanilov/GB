-- Выводит ФИО преподавателя, название курса, среднюю оценку
SELECT
(SELECT surname FROM teacher WHERE id = teacher_id) AS Фамилия,
(SELECT name FROM teacher WHERE id = teacher_id) AS Имя,
(SELECT (SELECT name from courses where id = course_id) FROM streams WHERE id = stream_id) AS Название_курса,
grade AS Седняя_оценка
FROM grades;

-- Найдите потоки, количество учеников в которых больше или равно 40. В отчет выведите номер потока, название курса и количество учеников
SELECT
number AS Номер_потока,
(SELECT name FROM courses WHERE id = course_id) AS Название_курса,
student_count AS Количество_студентов
FROM streams WHERE student_count >= 40;

--Найдите два потока с самыми низкими значениями успеваемости. В отчет выведите номер потока, название курса, фамилию и имя преподавателя (одним столбцом), оценку успеваемости
SELECT
(SELECT number from streams WHERE id = stream_id) AS Номер_потока,
(SELECT (SELECT name FROM courses WHERE id = course_id) FROM streams WHERE id = stream_id) AS Название_курса,
(SELECT surname FROM teacher WHERE id = teacher_id) AS Фамилия,
(SELECT name FROM teacher WHERE id = teacher_id) AS Имя,
grade AS Средняя_оценка 
FROM grades
ORDER BY grade ASC LIMIT 2;


--Найдите потоки преподавателя Натальи Петровой
SELECT
(SELECT number FROM streams WHERE id = stream_id) AS Номер_потока,
stream_id AS ID_потока FROM grades WHERE teacher_id = (SELECT id FROM teacher WHERE surname = 'Савельев' AND name = 'Николай');


--Найдите потоки, по которым успеваемость ниже 4.8. В отчёт выведите идентификатор потока, фамилию и имя преподавателя.
SELECT 
(SELECT surname FROM teacher WHERE id = teacher_id) AS Фамилия,
(SELECT name FROM teacher WHERE id = teacher_id) AS Имя,
(SELECT number FROM streams WHERE id = stream_id) AS Идентификатор_потока,
grade AS Успеваемость
FROM grades WHERE grade < 4.8;

--Найдите среднюю успеваемость всех потоков преподавателя Николая Савельева. В отчёт выведите идентификатор преподавателя и среднюю оценку по потокам.
SELECT 
(SELECT ((select sum(grade) from grades where teacher_id = (SELECT id FROM teacher WHERE surname = 'Савельев' AND name = 'Николай'))) / (select count(grade) from grades where teacher_id = (SELECT id FROM teacher WHERE surname = 'Савельев' AND name = 'Николай'))) AS Средняя_успеваемось,
id AS Идентификатор_преподавателя
FROM teacher WHERE surname = 'Савельев' AND name = 'Николай';