// Пример объекта
const studentInfo = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 20,
    classes: {
        mathematics: {
            hours: 50,
            mark: 'ok'
        },
        physics: {
            hours: 100,
            mark: 'ok'
        }
    },
    school: 'school №2'
}

// Преобразование объекта в JSON формат
const setStudentInfoInJsonFile = JSON.stringify(studentInfo, null, 4);


// Получение данных из локального файла JSON.
// В HTML нужно указать модульный тип скрипта <script type="module" src="script.js"></script>
// При импорте данные автоматически преобразуются в объект
import jsonFile from './data.json' assert {type: 'json'};


// Получение данных с API
const apiUrl = 'https://api.github.com/users/octocat'; // Пример ссылки на API

const getDataFromApi = async (url) => {
    const response = await fetch(url); // Получает ответ с сервера
    if (response.ok) {
        // const jsonData = await response.text(); // Данные в формате JSON
        const parsedJsonData = await response.json(); // Объект, полученный из JSON
        return parsedJsonData;
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

const apiData = await getDataFromApi(apiUrl);


// Отправка формы на сервер

const serverUrl = 'https://httpbin.org/2post'; // Пример ссылки на сервер

function sendFormData() {
    const XHR = new XMLHttpRequest();

    // Связывает объект FormData и форму
    const FD = new FormData(form);

    // Настройка запроса для отправки
    XHR.open("POST", serverUrl);

    // Отправляются данные, которые указал пользователь в форме
    XHR.send(FD);

    XHR.onload = function () {
        if (XHR.status != 200) { // если статус не 200, то произошла ошибка
            console.log(`Error ${XHR.status}: ${XHR.statusText}`);
        } else {
            console.log(`Successful: ${XHR.response}`); // Ответ сервера: статус "успешно" и содержимое ответа
        }
    };

    // onerror - функция будет вызываться, если в запросе пошло что-то не так. Например, нет соединения с сервером или ошибка в адресе запроса.
    XHR.onerror = function () {
        console.log("Request error");
    };
}

// Пример использования.
// Находит элемент с id='formElem'
const form = document.getElementById("formElem");

// Слушает событие submit, при его наступлении запускает функцию sendFormData()
form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendFormData();
});