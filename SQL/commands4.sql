-- Создайте представление, которое для каждого курса выводит название, номер последнего потока, дату начала обучения последнего потока и среднюю успеваемость курса по всем потокам.
CREATE VIEW 'courses_view' AS
SELECT 
    courses.name AS Название_курса,
    max(streams.number) AS Номер_потока,
    streams.started_at AS Дата_начала,
    grades.grade AS Успеваемость
FROM courses 
    LEFT JOIN streams
    ON courses.id = streams.course_id
    LEFT JOIN grades
    ON grades.stream_id = streams.id
    GROUP BY course_id;

-- Удалите из базы данных всю информацию, которая относится к преподавателю с идентификатором, равным 3. Используйте транзакцию.
BEGIN TRANSACTION;
    DELETE FROM teacher WHERE id = 3;
    DELETE FROM grades WHERE teacher_id = 3;
ROLLBACK;
-- COMMIT для подтверждения результата
-- ROLLBACK отменяет результат

-- Создайте триггер для таблицы успеваемости, который проверяет значение успеваемости на соответствие диапазону чисел от 0 до 5 включительно
CREATE TRIGGER check_grade_format BEFORE INSERT ON grades
WHEN New.grade NOT BETWEEN 0 AND 5
BEGIN
  SELECT RAISE(ABORT,'Wrong grade (use 0 - 5.0');
END;


-- Триггер на проверку корректности формата ввода даты
CREATE TRIGGER check_data_format BEFORE INSERT
    ON streams
    BEGIN
        SELECT CASE
        WHEN 
            (NEW.start_date NOT LIKE '____-__-__')
            OR (CAST(SUBSTR(NEW.start_date, 1, 4) AS INTEGER) NOT BETWEEN 2021 AND 2022)
            OR (CAST(SUBSTR(NEW.start_date, 6, 2) AS INTEGER) NOT BETWEEN 1 AND 12)
            OR (CAST(SUBSTR(NEW.start_date, 9, 2) AS INTEGER) NOT BETWEEN 1 AND 31)
        THEN 
            RAISE(ABORT, 'Wrong date format')
        END;
    END;