// Загружаем данные из JSON
const scheduleData = [
    {
        id: 1,
        name: "Йога",
        time: "10:00 - 11:00",
        maxParticipants: 15,
        currentParticipants: 8,
    },
    {
        id: 2,
        name: "Пилатес",
        time: "11:30 - 12:30",
        maxParticipants: 10,
        currentParticipants: 5,
    },
    {
        id: 3,
        name: "Кроссфит",
        time: "13:00 - 14:00",
        maxParticipants: 20,
        currentParticipants: 15,
    },
    {
        id: 4,
        name: "Танцы",
        time: "14:30 - 15:30",
        maxParticipants: 12,
        currentParticipants: 10,
    },
    {
        id: 5,
        name: "Бокс",
        time: "16:00 - 17:00",
        maxParticipants: 8,
        currentParticipants: 6,
    },
];

// Проверяем наличие сохраненных данных в Local Storage
const savedScheduleData = JSON.parse(localStorage.getItem("scheduleData"));
const updatedScheduleData = savedScheduleData || scheduleData;

// Создаем таблицу на основе данных
const table = document.getElementById("scheduleTable");

updatedScheduleData.forEach((data) => {
    const row = table.insertRow();
    row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.time}</td>
        <td>${data.maxParticipants}</td>
        <td>${data.currentParticipants}</td>
      `;

    const registerButtonCell = row.insertCell();
    const cancelButtonCell = row.insertCell();

    // Проверяем доступность кнопок
    if (data.currentParticipants >= data.maxParticipants) {
        registerButtonCell.innerHTML = `<button class="btn disabled">Записаться</button>`;
    } else {
        registerButtonCell.innerHTML = `<button class="btn" onclick="register(${data.id})">Записаться</button>`;
    }

    if (data.currentParticipants > 0) {
        cancelButtonCell.innerHTML = `<button class="btn" onclick="cancelRegistration(${data.id})">Отменить запись</button>`;
    } else {
        cancelButtonCell.innerHTML = "";
    }
});

// Функция для обновления состояния кнопок и сохранения изменений в Local Storage
function updateButtonsAndLocalStorage() {
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const registerButton = rows[i].querySelector(".btn");
        const cancelButton = rows[i].querySelector(".btn:last-child");

        const data = updatedScheduleData.find((d) => d.id === i);

        if (data.currentParticipants >= data.maxParticipants) {
            registerButton.disabled = true;
        } else {
            registerButton.disabled = false;
        }

        if (data.currentParticipants > 0) {
            cancelButton.style.display = "inline-block";
        } else {
            cancelButton.style.display = "none";
        }
    }

    localStorage.setItem("scheduleData", JSON.stringify(updatedScheduleData));
}

// Функция для записи на занятие
function register(id) {
    const data = updatedScheduleData.find((d) => d.id === id);
    data.currentParticipants++;
    updateButtonsAndLocalStorage();
}

// Функция для отмены записи на занятие
function cancelRegistration(id) {
    const data = updatedScheduleData.find((d) => d.id === id);
    if (data.currentParticipants > 0) {
        data.currentParticipants--;
        updateButtonsAndLocalStorage();
    }
}

// Обновляем состояние кнопок и количество участников при загрузке страницы
updateButtonsAndLocalStorage();
