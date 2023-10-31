<template>
  <div id="app">
    <GlobalStyles />
    <SiteHeader />
    <InteriorPage />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "./components/global/SiteHeader/SiteHeader.vue";
import GlobalStyles from "./components/global/GlobalStyles.vue";
import InteriorPage from "@/components/InteriorPage/InteriorPage.vue";
import SiteFooter from "./components/global/SiteFooter/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    GlobalStyles,
    InteriorPage,
    SiteFooter,
  },
};
</script>

<style></style>
