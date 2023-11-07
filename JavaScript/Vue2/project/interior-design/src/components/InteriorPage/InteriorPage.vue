<template>
  <div>
    <InteriorPageBanner />
    <div class="interior-page-content-wrapper center">
      <div class="main-content">
        <article :is="currentComponent"></article>
      </div>
      <div class="tag-area">
        <h3 class="tag-area-heading">Tags</h3>
        <div class="tags-container">
          <InteriorPageTags @clickedTag="setArticleComponent" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InteriorPageArticle from "./InteriorPageArticle.vue";
import InteriorPageArticle2 from "./InteriorPageArticle2.vue";
import InteriorPageArticle3 from "./InteriorPageArticle3.vue";
import InteriorPageArticle4 from "./InteriorPageArticle4.vue";
import NoPage from "./NoPage.vue";
import InteriorPageBanner from "./InteriorPageBanner.vue";
import InteriorPageTags from "./InteriorPageTags.vue";
export default {
  name: "InteriorPage",
  components: {
    InteriorPageArticle,
    InteriorPageArticle2,
    InteriorPageBanner,
    InteriorPageTags,
  },
  data() {
    return {
      articleCode: 0,
      currentComponent: null,
    };
  },
  created() {
    this.setArticleComponent(this.articleCode);
  },
  methods: {
    clg() {
      console.log(this.nechto);
    },
    setArticleComponent(index) {
      this.articleCode = index;
      switch (index) {
        case 0:
          this.currentComponent = InteriorPageArticle;
          break;
        case 1:
          this.currentComponent = InteriorPageArticle2;
          break;
        case 2:
          this.currentComponent = InteriorPageArticle3;
          break;
        case 3:
          this.currentComponent = InteriorPageArticle4;
          break;
        default:
          this.currentComponent = NoPage;
          break;
      }
    },
  },
};
</script>
<style scoped>
.interior-page-content-wrapper {
  display: flex;
  gap: 52px;
}
.tag-area {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 200px;
  max-width: 345px;
}
.tag-area-heading {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
</style>
