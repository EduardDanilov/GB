const catalogItems = JSON.parse(catalogData)

const catalog = document.querySelector('.catalog');

catalogItems.forEach(({id, name, description, price, image, alt, link}) => {
    const productBox = document.createElement('div');
    catalog.appendChild(productBox);
    productBox.classList.add('product')

    const productImage = document.createElement('img');
    productBox.appendChild(productImage);
    productImage.classList.add('product__img')
    productImage.alt = alt;
    productImage.src = image;

    const productName = document.createElement('a');
    productBox.appendChild(productName);
    productName.classList.add('product__name')
    productName.href = link;
    productName.textContent = name;

    const productDescription = document.createElement('p');
    productBox.appendChild(productDescription);
    productDescription.textContent = description;
    productDescription.classList.add('product__description');

    const productPrice = document.createElement('p');
    productBox.appendChild(productPrice);
    productPrice.classList.add('product__price');
    productPrice.textContent = `${price} руб.`;
    
    const productId = document.createElement('p');
    productBox.appendChild(productId);
    productId.classList.add('product__id');
    productId.textContent = `Код при заказе: ${id}`;

    productImage.addEventListener('mouseenter', () => {
        productImage.classList.add('product__img-hover')
    });
    productImage.addEventListener('mouseleave', () => {
        productImage.classList.remove('product__img-hover')
    })
});