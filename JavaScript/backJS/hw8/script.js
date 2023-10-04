// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    name = '';

    constructor (name) {
        this.name = name;
    }

    displayInfo() {
        console.log(this.name);
    }

}

class Manager extends Employee {
    department = '';

    constructor (name, department) {
        super();
        this.name = name;
        this.department = department;
    }

    displayInfo() {
        console.log(`Менеджер: ${this.name}, отдел: ${this.department}`);
    }
}

const IvanWorker = new Employee('Ваня');
IvanWorker.displayInfo();

const MishaManager = new Manager('Миша','Отдел продаж');
MishaManager.displayInfo();



// Задание 1: ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    orderNumber = 0;
    products = [];

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }

    addProduct(productName, productPrice) {
        if (productName !== '' && typeof productName === 'string' && productPrice > 0) {
            const product = {
                productName: '',
                productPrice: 0
            }
            product.productName = productName;
            product.productPrice = productPrice;
            this.products.push(product);
        } else if (productName === '' || typeof productName !== 'string') {
            return 'ERROR. Incorrect productName value entered';
        } else if (productPrice <= 0){
            return 'ERROR. Еhe product price must be greater than 0';
        } else {return 'Error...'}
    }

    getTotalPrice() {
        let totalSum = 0;
        this.products.forEach((el) => {
            totalSum += el.productPrice;
        })
        return totalSum;
    }
}

let orderNumber = 12345;

const userOrder = new Order(orderNumber);

userOrder.addProduct('макароны', 100)
userOrder.addProduct('пельмени', 1000)
userOrder.addProduct('стейк', 500)
userOrder.addProduct('колбаса', 200)
userOrder.addProduct('сахар', 800)
userOrder.addProduct('чай') // не будет добавлен, так как не указана цена

console.log(userOrder.orderNumber); //12345
console.log(userOrder.products); // массив объектов, количество элементов 5
userOrder.getTotalPrice(); //2600