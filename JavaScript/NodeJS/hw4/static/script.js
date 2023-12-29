import { getRandomPass } from "./passgenerator.js";

const newUserAdder = document.querySelector(".new_user_adder");
const userCreateForm = document.querySelector(".user_create_form");
const newUserSubmitter = document.querySelector(".new_user_submitter");
const formUserFirstName = document.querySelector(".form_user_firstname");
const formUserLastName = document.querySelector(".form_user_lastname");
const formUserAge = document.querySelector(".form_user_age");

newUserAdder.addEventListener("click", () => {
    userCreateForm.classList.toggle("unvisible");
});

newUserSubmitter.addEventListener("click", (event) => {
    event.preventDefault();
    postNewUser();
});

const postNewUser = () => { //функция добавляет юзера
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
        const server = "http://127.0.0.1:3000/users"; // Ссылка на сервер
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