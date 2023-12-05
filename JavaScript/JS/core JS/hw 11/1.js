"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #originalBooks = []; // для хранения книг, переданных при создании экземпляра класса

    mainBooksList = [];

    constructor(books) {
        this.#originalBooks = books;
        this.mainBooksList = [...books];
    }

    addBook(title) {
        typeof title === 'string' && this.mainBooksList.includes(title) ? //в этой версии книги можно добавлять только по одной
        console.log('Ошибка. Книга уже есть') :
        this.mainBooksList.push(title);
      }

      removeBook(title) {
        this.mainBooksList.includes(title) ?
        this.mainBooksList.splice(this.mainBooksList.indexOf(title), 1) :
        console.log('Такой книги не существует');
      }

      hasBook(title) {
        return this.mainBooksList.includes(title)
      }
}

const hasDuplicates = (booksList) => {
    const inputBooksArray = [...booksList];
    const outputBooksArray = [];
    for (let i = 0; i < inputBooksArray.length; i++) {
        for (let j = i + 1; j < inputBooksArray.length; j++) {
            if (
                inputBooksArray[i].toLowerCase() ===
                inputBooksArray[j].toLowerCase()
            ) {
                console.log(`Дубликат ${inputBooksArray[j]} удален`);
                inputBooksArray.splice(j, 1);
            }
        }
        outputBooksArray.push(inputBooksArray[i]);
    }
    return outputBooksArray;
};

const booksArray = [
    "Harry Potter and the Philosopher's Stone",
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "Pride and Prejudice",
    "1984",
    "The Catcher in the Rye",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Animal Farm",
    "The Hobbit",
    "Harry Potter and the Philosopher's Stone",
    "The Catcher in the Rye",
    "To Kill a Mockingbird",
    "Harry Potter and the Chamber of Secrets",
    "1984",
    "Pride and Prejudice",
];

const lib = new Library(hasDuplicates(booksArray));
console.log(lib);
