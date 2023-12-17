// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

let firstPageVisiterCounter = 0;
let secondPageVisiterCounter = 0;

const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        firstPageVisiterCounter++; // Увеличиваем счетчик для первой страницы

        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.end(`<h1>Page #1</h1>
        <a href='/about'>link to page #2</a>
        <p>визитов: ${firstPageVisiterCounter}</p>`);
    } else if (req.url === "/about") {
        secondPageVisiterCounter++; // Увеличиваем счетчик для второй страницы

        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.end(`<h1>about page</h1>
        <a href='/'>link to page #1</a>
        <p>визитов: ${secondPageVisiterCounter}</p>`);
    } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
        res.end("<h1>page not found</h1>");
    }
});

server.listen(3000);
