// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function cubeExponentiationOperation(userNumber) {
//     return userNumber**3;
// }
// console.log(cubeExponentiationOperation(prompt('Введите число')));


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// Вариант 1
// function calculateNetSalary(userSalary) {
//     (isNaN(userSalary)) ? 
//     console.log('Invalid value') : 
//     console.log(`Размер заработной платы за вычетом налогов равен ${userSalary - (userSalary / 100 * 13)}`);
// }

//Вариант 2
// let calculateNetSalary = (userSalary) => (isNaN(userSalary) ? console.log('Incorrect value') : console.log(`Размер заработной платы за вычетом налогов равен ${userSalary - (userSalary / 100 * 13)}`));

// calculateNetSalary(prompt('Введите размер заработной платы'));


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let userNumber1 = prompt('Введите число №1');
// let userNumber2 = prompt('Введите число №2');
// let userNumber3 = prompt('Введите число №3');
// function findMaxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`max number is ${num1}`);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`max number is ${num2}`);
//     } else {
//         console.log(`max number is ${num3}`);
//     }
// }
// findMaxNumber(userNumber1, userNumber2, userNumber3);


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// function simpleCalc() {

//     let sum = (a, b) => a+b;
//     let minus = (a, b) => ((a >= b) ? a-b : b-a);
//     let mult = (a, b) => a*b;
//     let divide = (a, b) => a/b;


//     let number1 = Number(prompt('Введите число №1'));
//     let number2 = Number(prompt('Введите число №2'));
//     let result;

//     let userChoiceOperation = prompt('Введите название операции или ее код (указан в скобке):\nСложение (1)\nВычитание (2)\nУмножение (3)\nДеление (4)').toLowerCase();


//     if (userChoiceOperation === 'сложение' || Number(userChoiceOperation) === 1) {
//         result = sum(number1, number2);
//     } else if (userChoiceOperation === 'вычитание' || Number(userChoiceOperation) === 2) {
//         result = minus(number1, number2)
//     } else if (userChoiceOperation === 'умножение' || Number(userChoiceOperation) === 3) {
//         result = mult(number1, number2)
//     } else if (userChoiceOperation === 'деление' || Number(userChoiceOperation) === 4) {
//         result = divide(number1, number2)
//     }

//     console.log(result);
// }

// simpleCalc()