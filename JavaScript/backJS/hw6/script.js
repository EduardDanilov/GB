// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
arr = [3, 5, 7, 1, 9]
const minNumberInArray = (array) => Math.min(...array)
console.log(minNumberInArray(arr));

/////
console.log('');
/////

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    counter = 0;
    return {
        increment: () => counter++,
        decrement: () => counter--,
        getCounter: () => counter
    }
}

let a = createCounter()
a.increment() //1
a.increment() //2
a.increment() //3
a.decrement() //2
console.log(a.getCounter()) //2

/////
console.log('');
/////


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, className) {
    // проверка на наличие класса в рутовом элементе
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }

    // переменная childrenElements собирает детей рута в псевдомассив
    const childrenElements = rootElement.children;
    for (let i = 0; i < childrenElements.length; i++) {
        const element = findElementByClass(childrenElements[i], className);
        if(element) {
            return element
        }
        return null
    }
}

const rootElement = document.querySelector('.test');
const searchElement = findElementByClass(rootElement, 'test3');

console.log(searchElement);