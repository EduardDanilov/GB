<template>
  <div class="center article-content">
    <section class="article-top-content">
      <h1 class="article-heading-font-bigsize article-heading">Компонент №3</h1>
      <img
        class="article-photo article-photo-1"
        src="https://thumb.tildacdn.com/tild6263-3739-4864-a333-336366366436/-/resize/824x/-/format/webp/57a663f0979af.jpeg"
        alt="kitchen"
      />
      <div class="article-functional-area">
        <p class="article-date">26 December,2022</p>
        <div><BreadCrumbs /></div>
      </div>
      <p class="article-text-font-bigsize">Лорем ипсум долор сит амет</p>
    </section>
    <section class="article-bottom-content">
      <h2 class="article-heading-font-bigsize bottom-content-heading">
        Design sprints are great
      </h2>
      <div>
        <p class="article-text-font-bigsize">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
        <ol>
          <li class="article-text-font-bigsize">
            Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.
          </li>
          <li class="article-text-font-bigsize">
            Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.
          </li>
          <li class="article-text-font-bigsize">
            Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.
          </li>
        </ol>
      </div>
      <img
        class="article-photo article-photo-2"
        src="../../assets/img/article-kitchen-photo-2.jpg"
        alt="kitchen"
      />
      <p class="article-text-font-bigsize">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
    </section>
  </div>
</template>
<script>
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs.vue";
export default {
  name: "InteriorPageArticle",
  components: {
    BreadCrumbs,
  },
};
</script>
<style scoped>
.article-content {
  display: flex;
  flex-direction: column;
  max-width: 800px;
}
.article-heading {
  margin-bottom: 11px;
}
.article-photo {
  max-width: 100%;
}
.article-photo-1 {
  margin-bottom: 46px;
}
.article-photo-2 {
  margin-bottom: 35px;
}
.article-functional-area {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}
.article-date {
  color: #4d5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.article-top-content {
  margin-bottom: 35px;
}
.article-middle-content {
  margin-bottom: 44px;

  display: flex;
  max-width: 800px;
  padding: 53px 227px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border-radius: 50px;
  background: #f4f0ec;
}
.mid-content-important-text {
  display: flex;
  flex-direction: column;
}
.important-text-brackets {
  height: 132px;
  color: #cda274;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 200px;
  font-weight: 400;
  line-height: 125%; /* 250px */
  letter-spacing: 4px;
  transform: rotate(180deg);
}
.important-text-text {
  width: 352px;
  color: #cda274;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.article-bottom-content {
  margin-bottom: 96px;
}
.bottom-content-heading {
  margin-bottom: 20px;
}
.article-bottom-content ol {
  margin-top: 24px;
  margin-bottom: 44px;
  max-width: 713px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

ol {
  counter-reset: myCounter;
}
li {
  list-style: none;
}
li:before {
  counter-increment: myCounter;
  content: counter(myCounter);
  color: #cda274;
  font-family: DM Serif Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 25px */
  letter-spacing: 0.4px;
}
</style>
