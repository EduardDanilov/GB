<template>
  <div id="app">
    <GlobalStyles />
    <SiteHeader />
    <InteriorPage />
    <!-- <InteriorPageBanner /> -->
  </div>
</template>

<script>
import SiteHeader from "./components/global/SiteHeader/SiteHeader.vue";
import GlobalStyles from "./components/global/GlobalStyles.vue";
// import InteriorPageBanner from "./components/InteriorPage/InteriorPageBanner.vue";
import InteriorPage from "@/components/InteriorPage/InteriorPage.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    GlobalStyles,
    InteriorPage,
    // InteriorPageBanner,
  },
};
</script>

<style></style>
