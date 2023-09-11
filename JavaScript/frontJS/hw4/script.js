//1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const inputForm = document.querySelector('#from');
const outputForm = document.querySelector('span');
const changeSpan = () => {
  outputForm.innerText = inputForm.value;
}
inputForm.addEventListener('input', changeSpan);


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const messageButton = document.querySelector('.messageBtn');
const messageElement = document.querySelector('.message');
const elementChanger = () => {
  messageElement.classList.toggle('animate_animated');
  messageElement.classList.toggle('animate_fadeInLeftBig');
  messageElement.style.visibility = 'visible';
}
messageButton.addEventListener('click', elementChanger)


// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const passwordField = document.querySelector('input.form-control');
const selectField = document.querySelector('select.form-control');
const checkingForm = document.querySelector('form')

checkingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (passwordField.value !== '' && selectField.value !== '') {
    return;
  } else if (passwordField.value === '' && selectField.selectedIndex === 0) {
    passwordField.style.border = '2px solid red';
    selectField.style.border = '2px solid red';
    passwordField.classList.add('error');
    selectField.classList.add('error');
  } else if (passwordField.value === '') {
    passwordField.style.border = '2px solid red';
    passwordField.classList.add('error');
    passwordField.setCustomValidity('Строка пароля не может быть пустая');
    passwordField.reportValidity();
  } else if (selectField.selectedIndex === 0) {
    selectField.style.border = '2px solid red';
    selectField.classList.add('error');
    selectField.setCustomValidity('Выберите значение');
    selectField.reportValidity();
  }
});

passwordField.addEventListener("input", () => {
  passwordField.setCustomValidity("");
  passwordField.style.border = '2px solid green';
  passwordField.classList.remove('error');
});

selectField.addEventListener("input", () => {
  selectField.setCustomValidity("");
  selectField.style.border = '2px solid green';
  selectField.classList.remove('error');
});











// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (passwordField.value === "пароль") {
//     passwordField.style.borderColor = "green";
//     passwordField.style.borderWidth = "3px";
//     // проходим к дальнейшим действиям
//   } else {
//     passwordField.style.borderColor = "red";
//     passwordField.style.borderWidth = "3px";

//     passwordField.setCustomValidity("Пароль неверный");
//     passwordField.reportValidity();
//   }
// });