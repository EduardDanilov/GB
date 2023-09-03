// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', function () {
    console.log('Все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener("load", function () {
    console.log("Страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие Класс "super_element" присутствует в элементе "div". Сообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик. Необходимо использовать делегирование.
const pageBody = document.querySelector('body');
function findCurrentElement(event){
    const targetEl = event.target;
    targetEl.classList.contains('super_element') ? 
    console.log(`Клик по тегу ${targetEl.tagName.toLowerCase()}, класс super_element есть`) :
    console.log(`Клик по тегу ${targetEl.tagName.toLowerCase()}, класса super_element нет`);

}

pageBody.addEventListener('click', findCurrentElement)


// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const ifUserOnTextarea = document.querySelector('textarea')

ifUserOnTextarea.addEventListener('mouseenter', () => console.log('Вы навели на textarea'));


// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ulTag = document.querySelector('ul')
function logTagContent(event) {
    const ulButton = event.target;
    if (ulButton.tagName.toLowerCase() === 'button') {
        console.log(ulButton.innerHTML);
    }
}

ulTag.addEventListener('click', logTagContent)


// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
 
//Потому что ul из задания 5 вложен в body из задания 3. JS начинает обработку сверху вниз. Соответственно, он проникает вглубь документа до того момента, пока не встретит ul, обрабатывает этот тег, а после закрывающего /ul переходит к обработке body. Таким образом, js обрабатывает теги от частного к общему

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liEls = document.querySelectorAll('li')
console.log(liEls);
for (let i = 1; i < liEls.length; i+=2) {
    liEls[i].style.backgroundColor = 'red';
    liEls[i].children[0].style.backgroundColor = 'blue';
}