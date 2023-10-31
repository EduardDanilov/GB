<template>
  <div>
    <InteriorPageBanner />
    <div class="interior-page-content-wrapper center">
      <div class="main-content">
        <InteriorPageArticle />
      </div>
      <div class="tag-area">
        <h3 class="tag-area-heading">Tags</h3>
        <div class="tags-container">
          <InteriorPageTags v-for="tag in tags" :key="tag.id" :tag="tag" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InteriorPageArticle from "./InteriorPageArticle.vue";
import InteriorPageBanner from "./InteriorPageBanner.vue";
import InteriorPageTags from "./InteriorPageTags.vue";
export default {
  name: "InteriorPage",
  components: {
    InteriorPageArticle,
    InteriorPageBanner,
    InteriorPageTags,
  },
  data() {
    return {
      tags: [
        {
          id: 0,
          name: "Kitchen",
        },
        {
          id: 1,
          name: "Bedroom",
        },
        {
          id: 2,
          name: "Building",
        },
        {
          id: 3,
          name: "Architecture",
        },
        {
          id: 4,
          name: "Kitchen Planning",
        },
      ],
    };
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
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
