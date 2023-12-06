document
    .getElementById("reviewForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const productNameInput = document.getElementById("productName");
        const reviewTextInput = document.getElementById("reviewText");

        const productName = productNameInput.value.trim();
        const reviewText = reviewTextInput.value.trim();

        if (productName === "" || reviewText === "") {
            document.getElementById("error").style.display = "block";
            return;
        }

        const existingReviews =
            JSON.parse(localStorage.getItem("reviews")) || [];
        const existingProductIndex = existingReviews.findIndex(
            (review) => review.productName === productName
        );

        if (existingProductIndex !== -1) {
            existingReviews[existingProductIndex].reviews =
                existingReviews[existingProductIndex].reviews || [];
            existingReviews[existingProductIndex].reviews.push(reviewText);
        } else {
            existingReviews.push({
                productName: productName,
                reviews: [reviewText],
            });
        }

        localStorage.setItem("reviews", JSON.stringify(existingReviews));

        productNameInput.value = "";
        reviewTextInput.value = "";
        document.getElementById("error").style.display = "none";

        alert("Отзыв успешно добавлен!");
    });
