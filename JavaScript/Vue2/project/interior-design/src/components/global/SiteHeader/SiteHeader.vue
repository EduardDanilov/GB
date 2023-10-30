<template>
  <div class="container center">
    <SiteLogo />
    <NavList />
  </div>
</template>
<script>
import SiteLogo from "./SiteLogo.vue";
import NavList from "./NavList.vue";
export default {
  name: "SiteHeader",
  components: {
    SiteLogo,
    NavList,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
  margin-bottom: 45px;
}
</style>
