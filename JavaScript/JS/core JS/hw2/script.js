// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = prompt('Введите значение меньше либо равное 1');
// let num2 = prompt('Введите значение больше либо равно 3');
// if (Number(num1) <= 1 && Number(num2) >= 3) {
//   alert('Введены корректные значения');
// } else if (Number(num1) > 1 && Number(num2) < 3) {
//     alert('Оба значения введены неверно');
// } else if (Number(num1) > 1) {
//     alert('Неверное первое введенное значение');
// } else if (Number(num2) < 3) {
//     alert('Неверное второе введенное значение');
// }


// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// (test === true) ? console.log('+++') : console.log('---');


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let userDay = prompt('Введите число месяца')
// if (userDay < 1 || userDay > 31) {
//     alert(`Число ${userDay} не существует`);
// }
// else if (userDay < 11) {
//     alert(`Число ${userDay} относится к I декаде`);
// } else if (10 < userDay && userDay < 21) {
//     alert(`Число ${userDay} относится ко II декаде`);
// } else {
//     alert(`Число ${userDay} относится к III декаде`);
// }


// Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// let userNumber = prompt('Введите число');
// let countOfOnes = userNumber % 10;
// let countOfTens = parseInt((userNumber / 10) % 10);
// let countOfHundreds = parseInt((userNumber / 100) % 10);
// console.log(`Сотни: ${countOfHundreds}, десятки: ${countOfTens}, единицы: ${countOfOnes}`);