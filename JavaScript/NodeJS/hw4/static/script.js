import { getRandomPass } from "./passgenerator.js";

const newUserAdder = document.querySelector(".new_user_adder");
const userCreateForm = document.querySelector(".user_create_form");
const newUserSubmitter = document.querySelector(".new_user_submitter");
const formUserFirstName = document.querySelector(".form_user_firstname");
const formUserLastName = document.querySelector(".form_user_lastname");
const formUserAge = document.querySelector(".form_user_age");
const allUsersSelector = document.querySelector('.all_user_selector');

newUserAdder.addEventListener("click", () => {
    userCreateForm.classList.toggle("unvisible");
});

newUserSubmitter.addEventListener("click", (event) => {
    event.preventDefault();
    postNewUser();
});

allUsersSelector.addEventListener('click', () => {
    viewAllUsers()
})

const postNewUser = () => { //функция добавляет юзера

    const server = "http://127.0.0.1:3000/adduser"; // Ссылка на сервер

    const user = {
        id: "",
        firstName: "",
        lastName: "",
        age: 0,
    };

    user.id = getRandomPass(10, "letters", "numbers");

    user.firstName = formUserFirstName.value;
    user.lastName = formUserLastName.value;
    user.age = formUserAge.value;

    if (user.firstName !== "" && user.lastName !== "" && user.age !== "") { // если все поля заполнены, данные отправляются на сервер
        
        const data = JSON.stringify(user, null, 4); // данные

        fetch(server, {
            method: "POST", // метод
            headers: {
                "Content-Type": "application/json",
            },
            body: data, // тело запроса с данными
        })
            .then((response) => {
                // обработка ответа сервера
                if (!response.ok) {
                    return Promise.reject(
                        new Error(
                            `Ошибка выполнения запроса: ${response.status} (${response.statusText})`
                        )
                    );
                }
                return response.json();
            })
            .then((data) => {
                // работа с данными, полученными от сервера
                const userinfo = JSON.parse(data);
                console.log("Сохраненный юзер: ", userinfo);
            })
            .catch((error) => {
                // вывод ошибки
                console.log(error);
            });

        // обнуление объекта
        formUserFirstName.value = "";
        formUserLastName.value = "";
        formUserAge.value = "";
    } else { // обработчик если одно из полей не заполнено
        const inputs = userCreateForm.querySelectorAll("input");
        inputs.forEach((input) => {
            if (!input.value) { // поиск незаполненного поля
                const warningMessage = input.nextElementSibling;
                warningMessage.classList.remove("unvisible");
                input.classList.add("error_null_value");
            }
            // убирает ошибки, когда фокус на незаполненном поле
            input.addEventListener("click", () => {
                const warningMessage = input.nextElementSibling;
                input.classList.remove("error_null_value");
                warningMessage.classList.add("unvisible");
            });
        });
    }
};

async function viewAllUsers() {
    const server = "http://127.0.0.1:3000/users"; // Ссылка на сервер
    try {
        const response = await fetch(server);
        if (!response.ok) {
            throw new Error('Something bad happened. Error: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
        const usersList = document.querySelector('.users_list');
        usersList.innerHTML = `<ul class="users_list"></ul>`
        data.forEach(({ id, firstName, lastName, age }) => {
            const user = `
                <li class='user_element'>
                    <p class='user_element_firstname'>${firstName}</p>
                    <p class='user_element_firstname'>${lastName}</p>
                    <p class='user_element_firstname'>${age}</p>
                </li>
            `
            usersList.insertAdjacentHTML("beforeend", user); //добавление контента на страницу сайта
        })
    } catch (error) {
        console.log(error);
    }
}
/*
function fetchData() {
    try {
        const response = await fetch("data.json"); // получает данные с API
        if (!response.ok) {
            throw new Error("Не удалось получить данные с data.json");
        }
        const data = await response.json(); // преобразует данные из JSON в объект
        const productsCards = document.querySelector(".cards_content"); 

        //создание карточки товара
        data.forEach(({ name, description, price, image, size, color }) => {

            const cardContent = `
            <div class="product__cards__card">
                <div class="card_img-block">
                    <img src="${image}" alt="product photo" class="card_img">
                    <div class="card_img_blackout">
                        <div class="add_to_cart_button">
                            <p class="add_to_cart_button-content">Add to Cart</p>
                        </div>
                    </div>
                </div>
                <div class="card_text-block">
                    <h4 class="card_title">${name}</h4>
                    <p class="card_description">${description}</p>
                    <p class="card_price">$<span class="price_value">${price}</span></p>
                </div>
                <div class="info-block">
                    <div class="info-block-size">${size}</div>
                    <div class="info-block-color">${color}</div>
                </div>
            </div>
            `;
            productsCards.insertAdjacentHTML("beforeend", cardContent); //добавление контента на страницу сайта
*/