<template>
  <div id="app">
    <GlobalStyles />
    <SiteHeader />
    <div :is="currentComponent"></div>
    <div>{{ a }}</div>
    <SiteFooter />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import SiteHeader from "./components/global/SiteHeader/SiteHeader.vue";
import GlobalStyles from "./components/global/GlobalStyles.vue";
import InteriorPage from "@/components/InteriorPage/InteriorPage.vue";
import ProjectPage from "@/components/ProjectPage/ProjectPage.vue";
import SiteFooter from "./components/global/SiteFooter/SiteFooter.vue";
import NoPage from "./components/global/NoPage.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    GlobalStyles,
    InteriorPage,
    ProjectPage,
    SiteFooter,
    NoPage,
  },
  data() {
    return {
      currentComponent: null,
      a: 0,
    };
  },
  created() {
    this.currentComponent = InteriorPage;
    this.currentComponentChanger();
  },
  methods: {
    ...mapMutations(["setVisibleComponent"]),
    currentComponentChanger(a) {
      switch (a) {
        case 0:
          console.log("zero");
          this.currentComponent = InteriorPage;
          break;
        case 1:
          this.currentComponent = ProjectPage;
          break;
        default:
          this.currentComponent = NoPage;
          break;
      }
    },
  },
  computed: {
    ...mapState(["visibleComponent"]),
    count() {
      return {
        a: this.$store.state.visibleComponent,
      };
    },
  },
};
</script>

<style></style>
