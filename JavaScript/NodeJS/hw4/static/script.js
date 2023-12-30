import { getRandomPass } from "./passgenerator.js";

const newUserAdder = document.querySelector(".new_user_adder");
const userCreateForm = document.querySelector(".user_create_form");
const newUserSubmitter = document.querySelector(".new_user_submitter");
const formUserFirstName = document.querySelector(".form_user_firstname");
const formUserLastName = document.querySelector(".form_user_lastname");
const formUserAge = document.querySelector(".form_user_age");
const allUsersSelector = document.querySelector(".all_user_selector");
const userFinder = document.querySelector(".user_finder");
const usersList = document.querySelector(".users_list");

// Обработка события при клике на кнопку создания пользователя
newUserAdder.addEventListener("click", () => {
    userCreateForm.classList.toggle("unvisible");
});

// Обработка события при клике на кнопку отправки на сервер данных нового пользователя
newUserSubmitter.addEventListener("click", (event) => {
    event.preventDefault();
    postNewUser();
});

// Обработка события просмотра списка всех пользователей
allUsersSelector.addEventListener("click", () => {
    viewAllUsers();
});

// Обработка события поиска пользователя
userFinder.addEventListener("input", () => {
    usersFilter();
});

const postNewUser = () => {
    //Функция отправляет данные нового пользователя на сервер

    const server = "http://127.0.0.1:3000/adduser"; // Ссылка на сервер

    const user = {
        // шаблон объекта с данными пользователя
        id: "",
        firstName: "",
        lastName: "",
        age: 0,
    };

    user.id = getRandomPass(10, "letters", "numbers"); // Генератор случайного id

    //Заполнение объекта с данными пользователя
    user.firstName = formUserFirstName.value;
    user.lastName = formUserLastName.value;
    user.age = formUserAge.value;

    if (user.firstName !== "" && user.lastName !== "" && user.age !== "") {
        // если все поля заполнены, данные отправляются на сервер
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

        // Обнуление объекта
        formUserFirstName.value = "";
        formUserLastName.value = "";
        formUserAge.value = "";
    } else {
        // обработчик если какое-либо из полей не заполнено
        const inputs = userCreateForm.querySelectorAll("input");
        inputs.forEach((input) => {
            if (!input.value) {
                // Поиск незаполненного поля
                const warningMessage = input.nextElementSibling;
                warningMessage.classList.remove("unvisible");
                input.classList.add("error_null_value");
            }
            // Убирает ошибки, когда фокус на незаполненном поле
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
    fetch(server)
        .then((response) => {
            const contentType = response.headers.get("content-type");

            if (contentType.includes("application/json")) {
                // Код, выполняющийся, если получен JSON
                return response.json();
            } else if (contentType.includes("text/html")) {
                // Код, выполняющийся, если получен HTML
                return response.text();
            } else {
                // Код, выполняющийся в случае неподдерживаемого типа контента
                throw new Error("Unsupported content type");
            }
        })
        .then((data) => { // Вывод пользователей на страницу
            if (typeof data === "object") {
                usersList.innerHTML = `<ul class="users_list"></ul>`;
                data.forEach(({ id, firstName, lastName, age }) => {
                    const user = `
                <li class='user_element'>
                    <p class='user_element_firstname'>${firstName}</p>
                    <p class='user_element_firstname'>${lastName}</p>
                    <p class='user_element_firstname'>${age}</p>
                    <button class ='user_deleter' data-id="${id}">Удалить</button>
                </li>
            `;
                    usersList.insertAdjacentHTML("beforeend", user); //добавление контента на страницу сайта
                });
                // обработка кнопок удаления
                const removeButtons = document.querySelectorAll(".user_deleter");
                removeButtons.forEach((el) => {
                    el.addEventListener("click", (event) => {
                        event.preventDefault();
                        const userId = el.dataset.id;
                        deleteUser(userId);
                    });
                });
            } else if (typeof data === "string") {
                usersList.innerHTML = `<ul class="users_list"></ul>`;
                const emptyUserList = `
                 <li class='empty_user_list'>
                     <span>Users list is empty</span>
                 </li>
             `;
                usersList.insertAdjacentHTML("beforeend", emptyUserList);
            }
        })
        .catch((error) => {
            // Код для обработки ошибок
            console.error("Ошибка при получении данных:", error);
        });
}

// Фильтрация пользователей
async function usersFilter() {
    const server = "http://127.0.0.1:3000/users"; // Ссылка на сервер
    let userFinderText = userFinder.value;
    fetch(server)
        .then((response) => {
            const contentType = response.headers.get("content-type");

            if (contentType.includes("application/json")) {
                // Код, выполняющийся, если получен JSON
                return response.json();
            } else if (contentType.includes("text/html")) {
                // Код, выполняющийся, если получен HTML
                return response.text();
            } else {
                // Код, выполняющийся в случае неподдерживаемого типа контента
                throw new Error("Unsupported content type");
            }
        })
        .then((data) => {
            if (typeof data === "object") {
                const usersList = document.querySelector(".users_list");
                usersList.innerHTML = `<ul class="users_list"></ul>`;

                data.forEach(({ id, firstName, lastName, age }) => {
                    if (
                        firstName.includes(userFinderText) ||
                        lastName.includes(userFinderText)
                    ) {
                        const user = `
                <li class='user_element'>
                    <p class='user_element_firstname'>${firstName}</p>
                    <p class='user_element_firstname'>${lastName}</p>
                    <p class='user_element_firstname'>${age}</p>
                    <button class ='user_deleter' data-id='${id}'>Удалить</button>
                </li>
            `;
                        usersList.insertAdjacentHTML("beforeend", user); //Добавление контента на страницу сайта
                    }
                });
                const removeButtons =
                    document.querySelectorAll(".user_deleter");
                removeButtons.forEach((el) => {
                    el.addEventListener("click", (event) => {
                        event.preventDefault();
                        const userId = el.dataset.id;
                        deleteUser(userId);
                    });
                });
            } else if (typeof data === "string") {
                usersList.innerHTML = `<ul class="users_list"></ul>`;
                const emptyUserList = `
                 <li class='empty_user_list'>
                     <span>Users list is empty</span>
                 </li>
             `;
                usersList.insertAdjacentHTML("beforeend", emptyUserList);
            }
        })
        .catch((error) => {
            // Код для обработки ошибок
            console.error("Ошибка при получении данных:", error);
        });
}

// Удаление пользователя
async function deleteUser(userId) {
    const server = `http://127.0.0.1:3000/users/${userId}`;
    try {
        const response = await fetch(server, { method: "DELETE" });

        if (response.ok) {
            const userForRemoving = document.querySelector(`[data-id="${userId}"]`);
            console.log(userForRemoving);
            if (userForRemoving) {
                userForRemoving.remove();
                usersFilter()
                console.log("Пользователь успешно удален");
            } else {
                console.error("Элемент с указанным data-id не найден");
            }
        } else {
            throw new Error("Ошибка при удалении пользователя");
        }
    } catch (error) {
        console.error("Ошибка при удалении пользователя:", error);
    }
}