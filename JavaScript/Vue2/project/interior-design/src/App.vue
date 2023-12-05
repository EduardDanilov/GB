<template>
  <div id="app">
    <div class="app-wrapper">
      <GlobalStyles />
      <SiteHeader />
      <div :is="currentComponent"></div>
      <div v-if="this.$store.getters.getVisibleComponent === 'Home'">
        <InteriorPage />
      </div>
      <div v-if="this.$store.getters.getVisibleComponent === 'Project'">
        <ProjectPage />
      </div>
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
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
      homePage: "Project",
      // currentPage: "Home",
      // currentPage: this.$store.getters.getVisibleComponent,
      currentPage: function () {
        return this.$store.getters.getVisibleComponent;
      },
    };
  },
  created() {
    this.currentComponentChanger();
    this.setVisibleComponent(this.homePage);
  },
  methods: {
    ...mapMutations(["setVisibleComponent"]),
    currentComponentChanger() {
      switch (this.currentPage) {
        case "Home":
          this.currentComponent = "InteriorPage";
          break;
        case "Project":
          this.currentComponent = "ProjectPage";
          break;
        default:
          this.currentComponent = "NoPage";
          break;
      }
    },
  },

  computed: {
    ...mapState(["visibleComponent"]),
    ...mapGetters(["getVisibleComponent"]),
  },
};
</script>

<style>
.app-wrapper {
  width: 100%;
  align-items: center;
}
</style>
