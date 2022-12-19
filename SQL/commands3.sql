-- Покажите информацию по потокам. В отчет выведите номер потока, название курса и дату начала занятий.
SELECT number, started_at, name FROM streams JOIN courses
ON streams.course_id = courses.id;


-- Найдите общее количество учеников для каждого курса. В отчёт выведите название курса и количество учеников по всем потокам курса
SELECT name AS Название_курса, sum(student_count) AS Количество_учеников FROM streams JOIN courses
ON streams.course_id = courses.id
GROUP BY course_id;


-- Для всех учителей найдите среднюю оценку по всем проведённым потокам. В отчёт выведите идентификатор, фамилию и имя учителя, среднюю оценку по всем проведенным потокам. Важно чтобы учителя, у которых не было потоков, также попали в выборку
SELECT surname, name, ROUND(AVG(grade), 2) from teacher JOIN grades
ON teacher.id = grades.teacher_id
GROUP BY grade;