// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title = '';
    author = '';
    pages = 0;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages
    }

    displayInfo = () => console.log(`название: ${this.title}\nавтор: ${this.author}\nколичество страниц: ${this.pages}`);
}

const harryPotterBook = new Book('Гарри Поттер', 'Роулинг', 500);

harryPotterBook.displayInfo()


// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    name = '';
    age = null;
    grade = null;

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade
    }

    displayInfo = () => console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}th grade`);
}

const student1 = new Student("John Smith", 16, 10);
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, 11);
student2.displayInfo();