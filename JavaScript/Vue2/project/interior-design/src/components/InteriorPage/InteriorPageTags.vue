<template>
  <div class="tags-container">
    <div
      class="tag"
      v-for="(tag, index) in tags"
      :key="index"
      @click="handleClick(index)"
    >
      {{ tag.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "InteriorPageTags",
  data() {
    return {
      articleCode: 0,
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
  methods: {
    getTagId(tag) {
      console.log(tag.id);
      this.articleCode = tag.id;
    },
    handleClick(index) {
      this.$emit("clickedTag", index);
    },
  },
};
</script>
<style scoped>
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tag {
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border-radius: 10px;
  background: #f4f0ec;
  padding: 9px 30px;
}
.tag:hover {
  color: #fff;
  background: #292f36;
  cursor: pointer;
}
</style>
