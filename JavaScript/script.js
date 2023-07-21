// Задание 1. Перевод из Цельсия в Фаренгейты

let temperatureCelsium = Number(prompt('Введите температуру в градусах Цельсия'));
let temperatureFarenheit = (9 / 5) * temperatureCelsium + 32;
console.log(`Температура ${temperatureCelsium} градусов Цельсия = ${temperatureFarenheit} градусов по Фаренгейту`)


// Задание 2. Обмен переменными и вывод переменной в консоль
let userName = prompt('Введите имя пользователя');
let adminLogin = userName;
console.log(adminLogin)