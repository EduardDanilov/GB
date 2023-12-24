const express = require('express');
const fs = require('fs');

const app = express();

const filePath = './counter.json';

app.get('/', (req,res) => {
    let counter = null;
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    counter = data.homepage;
    data.homepage += 1;
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, updatedData, 'utf-8');
    res.send(`<h1>Первая страница</h1>\n<p>Посещений: ${counter}</p><a href='/about'>Ссылка на вторую страницу</a>`)
})

app.get('/about', (req,res) => {
    let counter = null;
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    counter = data.aboutpage;
    data.aboutpage += 1;
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, updatedData, 'utf-8');
    res.send(`<h1>Вторая страница</h1>\n<p>Посещений: ${counter}</p><a href='/'>Ссылка на первую страницу</a>`)
})

app.get('*', (req,res) => {
    let counter = null;
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    counter = data.aboutpage;
    data.aboutpage += 1;
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, updatedData, 'utf-8');
    res.send(`<h1>Некорректный адрес</h1><a href='/'>Ссылка на первую страницу</a>`)
})

const port = 3000;

app.listen(port, () => {
    console.log('server started');
})