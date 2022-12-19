-- Найдите общее количество учеников для каждого курса. В отчёт выведите название курса и количество учеников по всем потокам курса. Решите задание с применением оконных функций.
SELECT DISTINCT
name AS Название_курса,
sum(student_count) OVER (PARTITION BY courses.id) AS Число_студентов
FROM courses
LEFT JOIN streams
ON courses.id = streams.course_id
ORDER BY courses.name;

--  Найдите среднюю оценку по всем потокам для всех учителей. В отчёт выведите идентификатор, фамилию и имя учителя, среднюю оценку по всем проведённым потокам. Учителя, у которых не было потоков, также должны попасть в выборку. Решите задание с применением оконных функций.
SELECT DISTINCT
id,
surname AS Фамилия,
name AS Имя,
avg(grades.grade) OVER (PARTITION BY teacher_id) AS Средняя_оценка
FROM teacher
LEFT JOIN grades
ON teacher.id = grades.teacher_id
ORDER BY teacher.id;