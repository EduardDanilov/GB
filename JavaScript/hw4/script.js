// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - это четное число`);
//     } else {
//         console.log(`${i} - это нечетное число`);
//     }
// }



// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);



// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив, состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const arr = [];
// let sumArrayElements = 0;
// let minimalArrayNumber = 9;

// const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

// for (let i = 1; i <= 5 ; i++) {
//     arr.push(getRandomArbitrary(0, 9));
// }

// for (let i = 0; i < arr.length; i++) {
//   (arr[i] < minimalArrayNumber) ? minimalArrayNumber = arr[i] : minimalArrayNumber = minimalArrayNumber;
//   sumArrayElements += arr[i];
// }

// console.log(arr);

// console.log(`Минимальное число в массиве - ${minimalArrayNumber}`);
// console.log(`Сумма элементов массива ${sumArrayElements}`);

// (arr.includes(3)) ? console.log(`Цифра 3 найдена под индексом ${arr.indexOf(3)}`) : console.log('Цифра 3 не найдена');



// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов

// const userSymbol = 'x';

// for (let i = 1; i <= 20; i++) {
//     console.log(userSymbol.repeat(i));
// }