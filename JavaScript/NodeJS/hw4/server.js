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

const filePath = "./users.json";

app.get("/", (req, res) => {
    res.sendFile("./index.html");
});

app.post("/users", (req, res) => {
    const userData = req.body;
    console.log(userData);
    res.json(JSON.stringify(userData));

    // let counter = null;
    // const jsonData = fs.readFileSync(filePath, 'utf-8');
    // const data = JSON.parse(jsonData);
    // counter = data.aboutpage;
    // data.aboutpage += 1;
    // const updatedData = JSON.stringify(data, null, 2);
    // fs.writeFileSync(filePath, updatedData, 'utf-8');
});

app.post("/adduser", (req, res) => {
    const userData = req.body;
    res.json(JSON.stringify(userData));

    const usersFileData = fs.readFileSync(filePath, "utf-8");
    if (usersFileData.length !== 0) {
        const allUsersData = JSON.parse(usersFileData);
        const allUsersArray = [...allUsersData];
        allUsersArray.push(userData);
        const updatedUsersData = JSON.stringify(allUsersArray, null, 2);
        fs.writeFileSync(filePath, updatedUsersData, "utf-8");
    } else {
        const allUsersArray = [];
        allUsersArray.push(userData);
        const updatedUsersData = JSON.stringify(allUsersArray, null, 2);
        fs.writeFileSync(filePath, updatedUsersData, "utf-8");
    }
});

app.get("*", (req, res) => {
    res.send(
        `<h1>Некорректный адрес</h1><a href='/'>Ссылка на первую страницу</a>`
    );
});

const port = 3000;

app.listen(port, () => {
    console.log("server started");
});
