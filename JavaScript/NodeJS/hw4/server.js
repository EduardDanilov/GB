const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("static"));
app.use(express.json());

// Middleware для обработки CORS
app.use(function (req, res, next) {
    // Разрешение доступа от любого источника (не рекомендуется для продакшн)
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // Разрешение доступа только от определенных источников
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    // Разрешение различных методов запросов (GET, POST, PUT, DELETE и т. д.)
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Разрешение указанных заголовков запроса
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    // Разрешение использования куки и аутентификационных заголовков
    // res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// Разрешает методы для работы с запросами
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });

const filePath = "./users.json"; // Путь к файлу с пользователями

app.get("/", (req, res) => { // Запрос на главную страницу. Возвращает html-страницу
    res.sendFile("./index.html");
});

// Запрос списка всех пользователей
app.get("/users", (req, res) => { 
    const usersFileData = fs.readFileSync(filePath, "utf-8");
    if (usersFileData !== '') { // Отправляет клиенту json, если json файл не пустой
        res.json(JSON.parse(usersFileData));
    } else {
        res.send('<h1>error message</h1>') // Если jsnon файл пустой, отправляет клиенту html 
    }
});

// Добавление пользователя
app.post("/adduser", (req, res) => {
    const userData = req.body;
    res.json(JSON.stringify(userData));

    const usersFileData = fs.readFileSync(filePath, "utf-8");

    // Если файл не пустой, то данные добавляются
    if (usersFileData.length !== 0) {
        const allUsersData = JSON.parse(usersFileData);
        const allUsersArray = [...allUsersData];
        allUsersArray.push(userData);
        const updatedUsersData = JSON.stringify(allUsersArray, null, 2);
        fs.writeFileSync(filePath, updatedUsersData, "utf-8");
    } else { // Если файл с пользователями пустой, то создается структура файла
        const allUsersArray = [];
        allUsersArray.push(userData);
        const updatedUsersData = JSON.stringify(allUsersArray, null, 2);
        fs.writeFileSync(filePath, updatedUsersData, "utf-8");
    }
});

//Удаление пользователя
app.delete("/users/:userId", (req, res) => {
    const userId = req.params.userId; // userId приходит от клиента

    const usersFileData = fs.readFileSync(filePath, "utf-8");

    // чтение списка всех пользователей и их фильтрация (убран элемент с userId). Запись отфильтрованных данных
    try {
        const allUsersData = JSON.parse(usersFileData);
        const updatedUsersData = allUsersData.filter(user => user.id !== userId);
        const updatedUsersJson = JSON.stringify(updatedUsersData, null, 2);
        fs.writeFileSync(filePath, updatedUsersJson, "utf-8");
        res.json({ success: true, message: "Пользователь успешно удален" });
    } catch (error) {
        res.status(500).json({ error: "Ошибка при удалении пользователя" });
    }
});

// В остальных случаях
app.get("*", (req, res) => {
    res.send(
        `<h1>Некорректный адрес</h1><a href='/'>Ссылка на первую страницу</a>`
    );
});

const port = 3000;

app.listen(port, () => {
    console.log("server started");
});
