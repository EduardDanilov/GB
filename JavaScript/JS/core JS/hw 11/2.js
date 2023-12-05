"use strict";
/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    imageSrc:
      "https://5zv.by/image/cache/foto_edit/apple_iphone_13_%20(1)-1000x1000.jpg",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    imageSrc:
      "https://www.perekleyka-stekla.by/gallery_gen/37f94d345baa0dfdb9813ac757efd464_220x244.44444444444_fill.jpeg",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    imageSrc:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];


function createReviewElement(review) {
  const element = document.createElement("li");
  element.textContent = review.text;
  return element;
}

function createProductElement(product) {
  const element = document.createElement("div");
  element.classList.add("product");

  const imageElement = document.createElement("img");
  imageElement.src = product.imageSrc;
  element.appendChild(imageElement);

  const reviewsElement = document.createElement("ul");
  reviewsElement.classList.add("reviews");
  product.reviews.forEach((review) => {
    const reviewElement = createReviewElement(review);
    reviewsElement.appendChild(reviewElement);
  });
  element.appendChild(reviewsElement);

  const formElement = document.createElement("form");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const textarea = formElement.querySelector("textarea");
    const text = textarea.value.trim();
    if (text.length < 50 || text.length > 500) {
      const errorElement = document.createElement("p");
      errorElement.classList.add("error");
      errorElement.textContent =
        "Отзыв должен быть от 50 до 500 символов.";
      formElement.appendChild(errorElement);
      return;
    }

    const id = Date.now();
    const review = { id, text };
    const reviewElement = createReviewElement(review);
    reviewsElement.appendChild(reviewElement);
    textarea.value = "";
  });

  const textareaElement = document.createElement("textarea");
  textareaElement.setAttribute("placeholder", "Напишите отзыв...");
  textareaElement.setAttribute("rows", "4");
  formElement.appendChild(textareaElement);

  const submitButtonElement = document.createElement("button");
  submitButtonElement.setAttribute("type", "submit");
  submitButtonElement.textContent = "Добавить отзыв";
  formElement.appendChild(submitButtonElement);

  element.appendChild(formElement);

  return element;
}

function renderProducts() {
  const appElement = document.getElementById("app");
  initialData.forEach((product) => {
    const productElement = createProductElement(product);
    appElement.appendChild(productElement);
  });
}

renderProducts();