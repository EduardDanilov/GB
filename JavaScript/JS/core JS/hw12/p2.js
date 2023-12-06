const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

const productList = document.getElementById('productList');

if (reviews.length === 0) {
  productList.innerHTML = '<p>Отзывов пока нет.</p>';
} else {
  reviews.forEach(product => {
    const container = document.createElement('div');
    container.innerHTML = `
      <h2>${product.productName}</h2>
      <button onclick="toggleReviews(${product.id})">Показать отзывы</button>
      <div id="reviews-${product.id}" style="display: none;">
        <!-- Здесь будут отображаться отзывы -->
      </div>
    `;

    const reviewsContainer = container.querySelector(`#reviews-${product.id}`);
    product.reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.innerHTML = `
        <p>${review}</p>
        <button onclick="deleteReview(${product.id}, '${review}')">Удалить</button>
      `;
      reviewsContainer.appendChild(reviewElement);
    });

    productList.appendChild(container);
  });
}

function toggleReviews(productId) {
  const reviewsContainer = document.getElementById(`reviews-${productId}`);
  const toggleButton = reviewsContainer.previousElementSibling;

  if (reviewsContainer.style.display === 'none') {
    reviewsContainer.style.display = 'block';
    toggleButton.innerText = 'Скрыть отзывы';
  } else {
    reviewsContainer.style.display = 'none';
    toggleButton.innerText = 'Показать отзывы';
  }
}

function deleteReview(productId, reviewText) {
  const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const product = existingReviews.find(review => review.id === productId);

  if (product) {
    product.reviews = product.reviews.filter(review => review !== reviewText);

    if (product.reviews.length === 0) {
      existingReviews.splice(existingReviews.indexOf(product), 1);
    }

    localStorage.setItem('reviews', JSON.stringify(existingReviews));
    location.reload();
  }
}