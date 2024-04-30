const userDataJson = `[{
    "userId": 1,
    "userName": "Joanne",
    "userAge": 19
  }, {
    "userId": 2,
    "userName": "Orelle",
    "userAge": 55
  }, {
    "userId": 3,
    "userName": "Berri",
    "userAge": 22
  }, {
    "userId": 4,
    "userName": "Lauritz",
    "userAge": 78
  }, {
    "userId": 5,
    "userName": "Mickie",
    "userAge": 68
  }, {
    "userId": 6,
    "userName": "Katuscha",
    "userAge": 64
  }, {
    "userId": 7,
    "userName": "Devy",
    "userAge": 36
  }, {
    "userId": 8,
    "userName": "Melisent",
    "userAge": 63
  }, {
    "userId": 9,
    "userName": "Ivie",
    "userAge": 37
  }, {
    "userId": 10,
    "userName": "Derick",
    "userAge": 18
  }, {
    "userId": 11,
    "userName": "Lizabeth",
    "userAge": 53
  }, {
    "userId": 12,
    "userName": "Jamie",
    "userAge": 19
  }, {
    "userId": 13,
    "userName": "Tressa",
    "userAge": 69
  }, {
    "userId": 14,
    "userName": "Frasier",
    "userAge": 30
  }, {
    "userId": 15,
    "userName": "Waite",
    "userAge": 71
  }, {
    "userId": 16,
    "userName": "Bernette",
    "userAge": 30
  }, {
    "userId": 17,
    "userName": "Vonni",
    "userAge": 39
  }, {
    "userId": 18,
    "userName": "Ellie",
    "userAge": 17
  }, {
    "userId": 19,
    "userName": "Lucita",
    "userAge": 42
  }, {
    "userId": 20,
    "userName": "Terrye",
    "userAge": 25
  }, {
    "userId": 21,
    "userName": "Jimmy",
    "userAge": 47
  }, {
    "userId": 22,
    "userName": "Erna",
    "userAge": 24
  }, {
    "userId": 23,
    "userName": "Miguela",
    "userAge": 24
  }, {
    "userId": 24,
    "userName": "Valry",
    "userAge": 41
  }, {
    "userId": 25,
    "userName": "Brandice",
    "userAge": 21
  }, {
    "userId": 26,
    "userName": "Manya",
    "userAge": 48
  }, {
    "userId": 27,
    "userName": "Mag",
    "userAge": 56
  }, {
    "userId": 28,
    "userName": "Yetta",
    "userAge": 45
  }, {
    "userId": 29,
    "userName": "Torie",
    "userAge": 74
  }, {
    "userId": 30,
    "userName": "Robbie",
    "userAge": 56
  }, {
    "userId": 31,
    "userName": "Rachel",
    "userAge": 78
  }, {
    "userId": 32,
    "userName": "Clem",
    "userAge": 78
  }, {
    "userId": 33,
    "userName": "Johnathan",
    "userAge": 42
  }, {
    "userId": 34,
    "userName": "Hobart",
    "userAge": 68
  }, {
    "userId": 35,
    "userName": "Ansell",
    "userAge": 78
  }, {
    "userId": 36,
    "userName": "Piotr",
    "userAge": 66
  }, {
    "userId": 37,
    "userName": "Theo",
    "userAge": 56
  }, {
    "userId": 38,
    "userName": "Jeff",
    "userAge": 57
  }, {
    "userId": 39,
    "userName": "Egan",
    "userAge": 38
  }, {
    "userId": 40,
    "userName": "Morton",
    "userAge": 26
  }, {
    "userId": 41,
    "userName": "Colleen",
    "userAge": 56
  }, {
    "userId": 42,
    "userName": "Gwendolyn",
    "userAge": 77
  }, {
    "userId": 43,
    "userName": "Courtney",
    "userAge": 48
  }, {
    "userId": 44,
    "userName": "Oralla",
    "userAge": 20
  }, {
    "userId": 45,
    "userName": "Hulda",
    "userAge": 55
  }, {
    "userId": 46,
    "userName": "Clay",
    "userAge": 29
  }, {
    "userId": 47,
    "userName": "Junette",
    "userAge": 71
  }, {
    "userId": 48,
    "userName": "Fergus",
    "userAge": 56
  }, {
    "userId": 49,
    "userName": "Gabe",
    "userAge": 63
  }, {
    "userId": 50,
    "userName": "Engracia",
    "userAge": 19
  }]`;

const defaultUsersData = JSON.parse(userDataJson);

const usersView = document.querySelector(".users-data");
const sortAgeUp = document.querySelector(".sort-age-up");
const sortAgeDown = document.querySelector(".sort-age-down");
const sortAlphabetUp = document.querySelector(".sort-alphabet-up");
const sortAlphabetDown = document.querySelector(".sort-alphabet-down");
const nameFilter = document.querySelector("#name-filter");

sortAgeUp.addEventListener("click", () => sortArrayByAgeUp(defaultUsersData));
sortAgeDown.addEventListener("click", () =>
    sortArrayByAgeDown(defaultUsersData)
);
sortAlphabetUp.addEventListener("click", () =>
    sortArrayByAlphabetUp(defaultUsersData)
);
sortAlphabetDown.addEventListener("click", () =>
    sortArrayByAlphabetDown(defaultUsersData)
);
nameFilter.addEventListener("input", () => filterByNames(defaultUsersData));

function renderData(usersDataObject) {
    usersView.innerHTML = "";
    usersDataObject.forEach((user) => {
        const userElement = document.createElement("div");
        const sameUser = `${user.userId} ${user.userName} ${user.userAge}`;
        userElement.insertAdjacentHTML("beforeend", sameUser);
        usersView.appendChild(userElement);
    });
}

renderData(defaultUsersData);

function sortArrayByAgeUp(usersData) {
    const sortedUsersData = usersData.sort((a, b) => a.userAge - b.userAge);
    renderData(sortedUsersData);
}

function sortArrayByAgeDown(usersData) {
    const sortedUsersData = usersData.sort((a, b) => b.userAge - a.userAge);
    renderData(sortedUsersData);
}

function sortArrayByAlphabetUp(usersData) {
    const sortedUsersData = usersData.sort((a, b) => {
        if (a.userName < b.userName) {
            return -1;
        } else if (a.userName > b.userName) {
            return 1;
        } else {
            return 0;
        }
    });
    renderData(sortedUsersData);
}

function sortArrayByAlphabetDown(usersData) {
    const sortedUsersData = usersData.sort((a, b) => {
        if (a.userName > b.userName) {
            return -1;
        } else if (a.userName < b.userName) {
            return 1;
        } else {
            return 0;
        }
    });
    renderData(sortedUsersData);
}

function filterByNames(usersData) {
    const filteredUsersData = [];
    let currentName = nameFilter.value;
    usersData.forEach((currentUser) => {
        if (currentUser.userName.toLowerCase().includes(currentName)) {
            filteredUsersData.push(currentUser);
        }
    });
    renderData(filteredUsersData);
}
