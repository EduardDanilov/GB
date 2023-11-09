<template>
  <ul>
    <li
      class="li-element"
      v-for="(navElement, index) in navElements"
      :key="index"
      @click="selectVisibleComponent(navElement)"
    >
      {{ navElement.name }}
    </li>
  </ul>
</template>
<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  name: "NavList",
  data() {
    return {
      navElements: [
        {
          id: 0,
          name: "Home",
        },
        {
          id: 1,
          name: "Project",
        },
        {
          id: 2,
          name: "Blog",
        },
      ],
    };
  },
  methods: {
    selectVisibleComponent(navElement) {
      this.setVisibleComponent(navElement.name);
    },
    ...mapMutations(["setVisibleComponent"]),
  },
  computed: {
    ...mapState(["visibleComponent"]),
  },
};
</script>
<style>
ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 237px;
  height: 100%;
}
.li {
  display: block;
  height: 100%;
}
.li-element {
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  display: block;
}
</style>
