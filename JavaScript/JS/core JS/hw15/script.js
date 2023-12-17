window.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.querySelector(".image");
  const photographer = document.querySelector(".photographer");
  const likeCount = document.querySelector(".like_count");
  const likeButton = document.querySelector(".like_button");

  function setDataFromApiToPage(data) {
      console.log(data);
      imageElement.src = data.urls.regular;
      photographer.textContent = `Photo by ${data.user.name}`;
      likeCount.textContent = `${data.likes}`
  }

  function increaseLikes() {
      const currentLikes = Number(likeCount.textContent);
      likeCount.textContent = currentLikes + 1;
  }

  //лайки
  likeButton.addEventListener("click", increaseLikes);

  // Запрос к API Unsplash
  const apiUrl = "https://api.unsplash.com/photos/random";
  const apiKey = "ts3ZD5esFFZ9_Bai9l0hFr362D9eNzEd-jRKSmVvEE4";
  const headers = {
      Authorization: `Client-ID ${apiKey}`,
  };

  fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => setDataFromApiToPage(data))
      .catch((error) => console.log(error));
});
