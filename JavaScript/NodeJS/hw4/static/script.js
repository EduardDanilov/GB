import { getRandomPass } from "./passgenerator.js";

const newUserAdder = document.querySelector('.new_user_adder');
const userCreateForm = document.querySelector('.user_create_form');
const newUserSubmitter = document.querySelector('.new_user_submitter');
const formUserFirstName = document.querySelector('.form_user_firstname');
const formUserLastName = document.querySelector('.form_user_lastname');
const formUserAge = document.querySelector('.form_user_age');

newUserAdder.addEventListener('click', () => {
    userCreateForm.classList.toggle('unvisible')
})

newUserSubmitter.addEventListener('click', (event) => {
    event.preventDefault()
    postNewUser()
})

const postNewUser = () => {
    const server = 'http://127.0.0.1:3000/users'; // Ссылка на сервер

    const user = {
        id: '',
        firstName: '',
        lastName: '',
        age: 0
    }

    user.id = getRandomPass(10, 'letters', 'numbers')
    user.firstName = formUserFirstName.value
    user.lastName = formUserLastName.value
    user.age = formUserAge.value

    const data = JSON.stringify(user, null, 4)

    console.log(user);
    console.log(data);

    fetch(server, {
        method: 'POST', // метод
        headers: {
                'Content-Type': 'application/json'
                },
        body: data // тело с данными
    }).then((response) => { // обработка ответа сервера
        if(!response.ok) {
            return Promise.reject(new Error(`Ошибка выполнения запроса: ${response.status} (${response.statusText})`))
        }
        return response.json()
    }).then((data) => { // работа с данными, полученными от сервера
        const userinfo = JSON.parse(data);
        console.log('Сохраненный юзер: ', userinfo);
    })
    .catch((error) => { // вывод ошибки
        console.log(error);
    });

    formUserFirstName.value = '';
    formUserLastName.value = '';
    formUserAge.value = ''
}

// парсинг
// hw6 для удаления