<template>
  <div>
    <InteriorPageBanner />
    <InteriorPageArticle />
  </div>
</template>
<script>
import InteriorPageArticle from "./InteriorPageArticle.vue";
import InteriorPageBanner from "./InteriorPageBanner.vue";
export default {
  name: "InteriorPage",
  components: {
    InteriorPageArticle,
    InteriorPageBanner,
  },
};
</script>
<style scoped></style>
